import asyncio
import json
from channels.consumer import AsyncConsumer
from channels.generic.websocket import AsyncWebsocketConsumer

from channels.db import database_sync_to_async
from asgiref.sync import async_to_sync
from scrumbo.serializers.note import NoteSerializer
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

        await self.send(json.dumps({
            'notes': notes
        }))

    @database_sync_to_async
    def get_notes(self):
        board = Board.objects.get(url_friendly_name=self.board_name)
        notes = Note.objects.filter(board=board)
        serializer = NoteSerializer(notes, many=True)
        return serializer.data

    @database_sync_to_async
    def create_note(self):
        print('create note triggered')
        board = Board.objects.get(url_friendly_name=self.board_name)
        serializer = NoteSerializer(data={'body': ''}, context={'board': board})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.data


    async def receive(self, text_data):
        print(text_data)
        event = json.loads(text_data)
        
        event_type = event['type']
        print(event_type, 'event_type')

        if event_type == 'note_add':
            new_note = await self.create_note()
            print(new_note, 'note will be added')
        
            await self.channel_layer.group_send(
                self.board_name,
                {
                    json.dumps({
                        'type': event_type,
                        'message': new_note
                    })
                }
            )

        # add note

        # move note

        # edit note

        # delete note

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.board_name,
            self.channel_name
        )
        print('disconnected', close_code)
