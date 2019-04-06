from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response

from scrumbo.models import Board
from scrumbo.serializers import BoardModelSerializer

from django.views.decorators.csrf import csrf_exempt
from rest_framework.test import APIRequestFactory


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardModelSerializer    

