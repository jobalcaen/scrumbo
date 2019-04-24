from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
import re, string
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 


from scrumbo.models import Board
from scrumbo.serializers import BoardSerializer, BoardRetreiveSerializer
from django.views.decorators.csrf import csrf_exempt

class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

class BoardListViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)

    def create(self, request, *args, **kwargs):
        request._request.POST = request._request.POST.copy()
        request.data['url_friendly_name'] = 'PLACEHOLDER'
        serializer = BoardSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def retrieve(self, request, pk=None):
        queryset = Board.objects.all()
        board = get_object_or_404(queryset, pk=pk)
        serializer = BoardRetreiveSerializer(board, context={'request': request})
        return Response(serializer.data)
    
    def perform_create(self, serializer):
        serializer.save()
        