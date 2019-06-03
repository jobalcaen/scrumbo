import asyncio
import json
from channels.consumer import AsyncConsumer
from channels.generic.websocket import AsyncWebsocketConsumer

from channels.db import database_sync_to_async
from asgiref.sync import async_to_sync
from scrumbo.serializers import NoteSerializer
from rest_framework.renderers import JSONRenderer

from .models import Board, Note

class BoardConsumer(AsyncWebsocketConsumer):
    async def connect(self):

        self.board_name = self.scope['url_route']['kwargs']['board_url']
        print('board name ', self.board_name)

        await self.channel_layer.group_add(
            self.board_name,
            self.channel_name
        )

        await self.accept()

        notes = await self.get_notes()
        print('notes ', notes)

        # notesJson = JSONRenderer().render(notes)
        # print('notesJson: ', notesJson)

        await self.send(text_data=json.dumps({
            'notes': notes
        }))


    @database_sync_to_async
    def get_notes(self):
        board = Board.objects.get(url_friendly_name=self.board_name)
        notes = Note.objects.filter(board=board)
        serializer = NoteSerializer(notes, many=True)
        return serializer.data


    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        
        message = text_data_json[0]

        # Send message to room group
        await self.channel_layer.group_send(
            self.board_name,
            {
                'type': 'note_message',
                'message': message
            }
        )

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.board_name,
            self.channel_name
        )
        print ('disconnected', close_code)



    async def note_message(self, event):
        note = event['message']

        await self.send(text_data=json.dumps({
            'message': note
        }))