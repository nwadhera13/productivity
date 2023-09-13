from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer
@api_view(['GET'])
def getRoutes(request):
    routes=[
        {
            'Hello':'World',
        }
    ]
    return Response(routes)


@api_view(['GET'])
def getTasks(request):
    notes = Task.objects.all()
    serializer = TaskSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTask(request, pk):
    task=Task.objects.get(id=pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Task.objects.get(id=pk)
    note.delete()
    return Response("Deleted")
