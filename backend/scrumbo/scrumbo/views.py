from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse

from scrumbo.models import Board
from scrumbo.serializers import ExampleModelSerializer

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_data(request):
	data = Board.objects.all()
	if request.method == 'GET':
		serializer = ExampleModelSerializer(data, many=True)
		return JsonResponse(serializer.data, safe=False)