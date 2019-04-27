from rest_framework import serializers
from scrumbo.models import Board, Note
import re

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'name', 'url_friendly_name')

    """
    Overide the default 'url_friendly_name' validation
    """
    def validate_name(self, value):
        if re.search(r"[^\w\s]", value):
            raise serializers.ValidationError("Only alpha numberic characters and white spaces alowed in board name")
        return value

    def make_url_friendly_name(self, name):
        return re.sub(r'\s', '-', name.lower())

    def create(self, validated_data):
        print(validated_data)
        board = Board(
            name=validated_data['name'],
            url_friendly_name=self.make_url_friendly_name(validated_data['name'])
        )
        board.save()
        return board

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'body', 'board')

    def create(self, validated_data):
        note = Note(
            body=validated_data['body'],
            board=self.context['board']
        )
        note.save()
        return note



