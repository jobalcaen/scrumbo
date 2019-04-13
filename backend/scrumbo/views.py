from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
import re, string

from scrumbo.models import Board
from scrumbo.serializers import BoardModelSerializer

from django.views.decorators.csrf import csrf_exempt
from rest_framework.test import APIRequestFactory


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardModelSerializer

    def make_url_friendly_name(self, name):
        print(re.sub(r'\s','-',name.lower()))
        return re.sub(r'\s','-',name.lower()) 

    def list(self, request):
        queryset = Board.objects.all()
        serializer = BoardModelSerializer(queryset, many=True, context={'request': request})
        self.make_url_friendly_name('hello satan')
        return Response(serializer.data)


    def create(self, request):
        print(request)
        print('create')