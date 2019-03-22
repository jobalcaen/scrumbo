
from rest_framework import serializers
from scrumbo.models import Board

class ExampleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('firstname', 'lastname')