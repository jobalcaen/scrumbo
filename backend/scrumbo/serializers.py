from rest_framework import serializers
from scrumbo.models import Board
import re

class BoardModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'name', 'url', 'url_friendly_name')

    def validate_name(self, value):
        if re.match(r"[^a-zA-Z0-9\s]", value):
            raise serializers.ValidationError("Only alpha numberic characters and white spaces alowed in board name")

        return value