from channels.layers import get_channel_layer
from scrumbo.serializers.note import NoteSerializer

async def update_board(note):
    print(note)
    serializer = NoteSerializer(note)
    channel_layer = get_channel_layer()

    content = {
        "payload": serializer.data
    }

    await channel_layer.group_send(boardName,
        {
            'type': 'note_message',
            'message': content
        }
    )