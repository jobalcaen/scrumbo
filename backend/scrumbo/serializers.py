from rest_framework import serializers
from scrumbo.models import Board
import re

class BoardModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'name', 'url', 'url_friendly_name')

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
        url_friendly_name = self.make_url_friendly_name(validated_data.get('name'))
        board = Board(
            name=validated_data['name'],
            url_friendly_name=url_friendly_name
        )
        board.save()
        return board
