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

        await self.channel_layer.group_add(
            self.board_name,
            self.channel_name
        )

        await self.accept()

        notes = await self.get_notes()

        await self.send(json.dumps({
            'type': 'connect',
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

    @database_sync_to_async
    def update_note(self):
        print('edit note triggered')
        board = Board.objects.get(url_friendly_name=self.board_name)
        serializer = NoteSerializer(data={'body': ''}, context={'board': board})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.data

    @database_sync_to_async
    def delete_note(self, note):
        print('delete note triggered')
        note = Note.objects.get(pk=note['id'])
        return note.delete() 

    async def receive(self, text_data):
        print('text: ', text_data)
        event = json.loads(text_data)
        
        event_type = event['type']
        print(event_type, 'event_type')

        # Send message to room group
        if event_type == 'note.add':
            new_note = await self.create_note()
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'note_add',
                    'note': new_note
                }                
            )
        
        if event_type == 'note.delete':
            print('event', event)
            await self.delete_note(event['note'])
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'note_delete',
                    'note': event['note']
                }                
            )

        # if event_type == 'note.update':
        #     updated_note = await self.update_note()

        #     await self.channel_layer.group_send(
        #         self.board_name,
        #         {
        #             'type': 'note_edit',
        #             'note': new_note
        #         }                
        #     )
        

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


    async def note_add(self, event):
        note = event['note']
        print(note, 'added')

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'type': 'note_add',
            'note': note
        }))

    async def note_delete(self, event):
        note = event['note']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'type': 'note_delete',
            'note': note
        }))
