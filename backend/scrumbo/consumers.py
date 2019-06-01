import asyncio
import json
from channels.consumer import AsyncConsumer
from channels.generic.websocket import WebsocketConsumer

from channels.db import database_sync_to_async
from asgiref.sync import async_to_sync


from .models import Board

class BoardConsumer(WebsocketConsumer):
    def connect(self):

        self.board_name = self.scope['url_route']['kwargs']['board_url']
        print('board name ', self.board_name)

        async_to_sync(self.channel_layer.group_add)(
            self.board_name,
            self.channel_name
        )
        self.accept()


    def receive(self, text_data):
        print('json.loads(text_data): ', text_data)
        text_data_json = json.loads(text_data)
        
        message = text_data_json[0]

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.board_name,
            {
                'type': 'note_message',
                'message': message
            }
        )

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.board_name,
            self.channel_name
        )
        print ('disconnected', close_code)



    def note_message(self, event):
        note = event['message']

        self.send(text_data=json.dumps({
            'message': note
        }))