from rest_framework import serializers
from scrumbo.models import Column

class ColumnSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=200, allow_blank=True)

    def create(self, validated_data):
        return Column.objects.create(**validated_data, board=self.context['board'])

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.save()
        return instance
