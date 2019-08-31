from rest_framework import serializers
from scrumbo.models import Note

class NoteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    body = serializers.CharField(max_length=200, allow_blank=True)
    x_position = serializers.IntegerField()
    y_position = serializers.IntegerField()

    def create(self, validated_data):
        return Note.objects.create(**validated_data, board=self.context['board'])
