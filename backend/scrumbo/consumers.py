import json
from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from scrumbo.serializers.note import NoteSerializer
from scrumbo.serializers.column import ColumnSerializer
from scrumbo.serializers.board import BoardSerializer
from .models import Board, Note, Column


class BoardConsumer(AsyncWebsocketConsumer):
    board_name = None

    async def connect(self):
        self.board_name = self.scope['url_route']['kwargs']['board_url']
        await self.channel_layer.group_add(
            self.board_name,
            self.channel_name
        )

        await self.accept()

        board = Board.objects.get(url_friendly_name=self.board_name)
        notes = await self.get_notes()
        columns = await self.get_columns()

        await self.send(json.dumps({
            'type': 'connect',
            'payload': {
                'notes': notes,
                'columns': columns,
                'columns_container_width': board.column_container_width
            }
        }))

    async def disconnect(self, close_code):
        print('DISCONNECTING!')
        # Leave room group
        await self.channel_layer.group_discard(
            self.board_name,
            self.channel_name
        )

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
        note = Note.objects.get(pk=event['id'])
        serializer = NoteSerializer(note, data={'body': event['body']}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.data

    @database_sync_to_async
    def move_note(self, event):
        note = Note.objects.get(pk=event['id'])
        serializer = NoteSerializer(note, data={'top': event['top'], 'left': event['left']}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.data

    @database_sync_to_async
    def delete_note(self, note_id):
        note = Note.objects.get(pk=note_id)
        return note.delete()

    @database_sync_to_async
    def get_columns(self):
        board = Board.objects.get(url_friendly_name=self.board_name)
        columns = Column.objects.filter(board=board)
        serializer = ColumnSerializer(columns, many=True)
        return serializer.data

    @database_sync_to_async
    def create_column(self):
        board = Board.objects.get(url_friendly_name=self.board_name)
        serializer = ColumnSerializer(context={'board': board}, data={'title': " "}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print("serializer.data ", serializer.data)
        return serializer.data

    @database_sync_to_async
    def delete_column(self):
        board = Board.objects.get(url_friendly_name=self.board_name)
        columns = Column.objects.filter(board=board)
        if columns:
            return columns.last().delete()

    @database_sync_to_async
    def edit_column_title(self, newColumn):
        column = Column.objects.get(pk=newColumn['id'])
        serializer = ColumnSerializer(column, data={'title': newColumn['title']}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return serializer.data

    @database_sync_to_async
    def resize_columns(self, newWidth):
        board = Board.objects.get(url_friendly_name=self.board_name)
        serializer = BoardSerializer(board, data={'column_container_width': newWidth}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return newWidth

    # receive messages from web socket
    async def receive(self, text_data):
        event = json.loads(text_data)

        print('EVENT type: ', event['type'])

        if event['type'] == 'note.add':
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

        elif event['type'] == 'note.delete':
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

        elif event['type'] == 'note.move':
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

        elif event['type'] == 'note.edit':
            updated_note = await self.update_note(event['payload'])
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'note_edit',
                    'payload': updated_note
                }
            )
        
        elif event['type'] == 'column.add':
            column =  await self.create_column()
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'column_add',
                    'payload': {
                        'column': column
                    }
                }
            )

        elif event['type'] == 'column.remove':
            column = await self.delete_column()
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'column_remove',
                    'payload': {
                        'column': column
                    }
                }
            )

        elif event['type'] == 'column.edit':
            column = await self.edit_column_title(event['payload']['column'])
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'column_edit',
                    'payload': {
                        'column': column
                    }
                }
            )

        elif event['type'] == 'columns.resize':
            print(event['payload'])
            width = await self.resize_columns(event['payload']['columns_container_width'])
            await self.channel_layer.group_send(
                self.board_name,
                {
                    'type': 'columns_resize',
                    'payload': {
                        'columns_container_width': width
                    }
                }
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

    async def column_add(self, event):
        await self.send(text_data=json.dumps({
            'type': 'column.add',
            'payload': event['payload']
        }))

    async def column_remove(self, event):
        await self.send(text_data=json.dumps({
            'type': 'column.remove',
            'payload': event['payload']
        }))
    
    async def column_edit(self, event):
        await self.send(text_data=json.dumps({
            'type': 'column.edit',
            'payload': event['payload']
        }))

    async def columns_resize(self, event):
        await self.send(text_data=json.dumps({
            'type': 'columns.resize',
            'payload': event['payload']
        }))
