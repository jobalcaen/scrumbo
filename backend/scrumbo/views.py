from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
import re, string
from rest_framework import status



from scrumbo.models import Board
from scrumbo.serializers import BoardModelSerializer


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardModelSerializer


    def create(self, request, *args, **kwargs):
        request._request.POST = request._request.POST.copy()
        request.data['url_friendly_name'] = 'PLACEHOLDER'
        serializer = BoardModelSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()
        