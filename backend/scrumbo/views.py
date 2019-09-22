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
from scrumbo.serializers.board import BoardSerializer
from scrumbo.serializers.note import NoteSerializer

from django.views.decorators.csrf import csrf_exempt

class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

class BoardView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    lookup_url_kwarg = 'board_id'

    def get_object(self):
        queryset = Board.objects.all()
        if 'board_url' in self.kwargs:
            obj = get_object_or_404(queryset, url_friendly_name=self.kwargs['board_url'])
            return obj

        elif 'board_id' in self.kwargs:
            obj = get_object_or_404(queryset, pk=self.kwargs['board_id'])
            return obj    

    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
       
class BoardListView(generics.ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

    def get_queryset(self):
        """
        optionally allow to search for boards by board name
        """
        queryset = Board.objects.all()
        board_name = self.request.query_params.get('name', None)
        board_url_friendly_name = self.request.query_params.get('url_name', None)

        if board_name is not None:
            queryset = queryset.filter(name=board_name)

        elif board_url_friendly_name is not None:
            queryset = queryset.filter(name=board_name)


        return queryset

    def create(self, request, *args, **kwargs):
        serializer = BoardSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
            
  
    def perform_create(self, serializer):
        serializer.save()