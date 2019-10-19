from rest_framework import serializers

from scrumbo.models import Note


class NoteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    body = serializers.CharField(max_length=200, allow_blank=True)
    top = serializers.IntegerField()
    left = serializers.IntegerField()
    color = serializers.CharField(max_length=6)

    def create(self, validated_data):
        return Note.objects.create(**validated_data, board=self.context['board'])

    def update(self, instance, validated_data):
        instance.body = validated_data.get('body', instance.body)
        instance.top = validated_data.get('top', instance.top)
        instance.left = validated_data.get('left', instance.left)
        instance.color = validated_data.get('color', instance.color)
        instance.save()
        return instance
