from rest_framework import serializers
from scrumbo.models import Board

class BoardModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Board
        fields = ('id', 'name',)
