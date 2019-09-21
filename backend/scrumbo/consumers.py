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
            'payload': {
                'notes': notes
            }
        }))

    @database_sync_to_async
    def get_notes(self):
        board = Board.objects.get(url_friendly_name=self.board_name)
        notes = Note.objects.filter(board=board)
        serializer = NoteSerializer(notes, many=True)
        return serializer.data

    @database_sync_to_async
    def create_note(self, note):
        print('create note triggered', note)
        board = Board.objects.get(url_friendly_name=self.board_name)
        serializer = NoteSerializer(data=note, context={'board': board})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.data

    @database_sync_to_async
    def update_note(self, event):
        print('edit note triggered')
        note = Note.objects.get(pk=event['id'])
        serializer = NoteSerializer(note, data={'body': event['body']}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.data

    @database_sync_to_async
    def move_note(self, event):
        print('edit note triggered', event)
        note = Note.objects.get(pk=event['id'])
        serializer = NoteSerializer(note, data={'top': event['top'], 'left': event['left']}, partial=True)

        serializer.is_valid(raise_exception=True)
        serializer.save()
        print('serializer.data ', serializer.data)
        print('serializer.data ', serializer.errors)
        return serializer.data

    @database_sync_to_async
    def delete_note(self, id):
        print('delete note triggered')
        note = Note.objects.get(pk=id)
        return note.delete()

    
    #receive messages from web socket
    async def receive(self, text_data):
        print('text: ', text_data)
        event = json.loads(text_data)
        
        event_type = event['type']
        print(event_type, 'event_type')

        # Send message to room group
        if event_type == 'note.add':
            new_note = await self.create_note(event['payload']['note'])
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'note_add',
                    'payload': {
                        'note': new_note
                    }
                }                
            )
        
        elif event_type == 'note.delete':
            print('event', event)
            await self.delete_note(event['payload']['id'])
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'note_delete',
                    'payload': {
                        'id': event['payload']['id']
                    }
                   
                }                
            )

        elif event_type == 'note.move':
            await self.move_note(event['payload'])
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'note_move',
                    'payload': {
                        'id': event['payload']['id'],
                        'top': event['payload']['top'],
                        'left': event['payload']['left']
                    }
                }           
            )

        elif event_type == 'note.edit':
            updated_note = await self.update_note(event['payload'])
            print('updated note: ', updated_note)
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'note_edit',
                    'payload': updated_note
                }           
            )


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.board_name,
            self.channel_name
        )

    async def note_add(self, event):
        await self.send(text_data=json.dumps({
            'type': 'note.add',
            'payload': event['payload']
        }))

    async def note_delete(self, event):
        await self.send(text_data=json.dumps({
            'type': 'note.delete',
            'payload': event['payload']
        }))

    async def note_move(self, event):
        await self.send(text_data=json.dumps({
            'type': 'note.move',
            'payload': event['payload']
        }))
        
    async def note_edit(self, event):
        await self.send(text_data=json.dumps({
            'type': 'note.edit',
            'payload': event['payload']
        }))
