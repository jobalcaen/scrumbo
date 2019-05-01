from rest_framework import serializers
from scrumbo.models import Board, Note
from django.db import models
from scrumbo.utils.exceptions import UniqueBoardException, InvalidBoardNameException
from rest_framework.validators import UniqueValidator
from django.db.models import CharField
from django.shortcuts import get_object_or_404


import re

def queryset_count_is_zero(queryset):
    print('fuck!!!!!!')
    if queryset.count() == 0:
        raise UniqueBoardException

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        name = CharField(max_length=30, validators=[queryset_count_is_zero])
        fields = ('id', 'name', 'url_friendly_name')

    def validate_name(self, value):
        if re.search(r"[^\w\s]", value):
            raise InvalidBoardNameException
        
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



