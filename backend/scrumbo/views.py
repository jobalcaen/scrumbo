from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
import re, string
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 
from rest_framework import generics
from django.http import Http404

from scrumbo.models import Board, Note
from scrumbo.serializers import BoardSerializer, NoteSerializer
from django.views.decorators.csrf import csrf_exempt

class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

class NoteListView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        board = Board.objects.get(pk=self.kwargs['board_id'])
        return Note.objects.filter(board=board)

    def create(self, request, *args, **kwargs):
        serializer = NoteSerializer(data=request.data, context={'board': Board.objects.get(pk=self.kwargs['board_id'])})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

class NoteView(generics.RetrieveUpdateDestroyAPIView):
    lookup_url_kwarg = 'note_id'
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class BoardView(generics.RetrieveUpdateDestroyAPIView):
    lookup_url_kwarg = 'board_id'
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
       
class BoardListView(generics.ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

    def create(self, request, *args, **kwargs):
        request._request.POST = request._request.POST.copy()
        serializer = BoardSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
  
    def perform_create(self, serializer):
        serializer.save()