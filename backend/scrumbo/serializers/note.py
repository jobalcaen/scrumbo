from rest_framework import serializers
from scrumbo.models import Note, Board

class NoteSerializer(serializers.Serializer):
    body = serializers.CharField(max_length=200, allow_blank=True)
    board = serializers.IntegerField

    def create(self, validated_data):
        return Note.objects.create(**validated_data, board=self.context['board'])

    # def update(self, instance, validated_data):
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.content = validated_data.get('content', instance.content)
    #     instance.created = validated_data.get('created', instance.created)
    #     instance.save()
    #     return instance