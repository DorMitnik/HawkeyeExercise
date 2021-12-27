from rest_framework.decorators import api_view
from .models import Task, Sub_Task
from rest_framework import status
from django.http import JsonResponse
from .serializers import SubTaskSerializer, TaskSerializer, TaskStatusSerializer, SubTaskStatusSerializer
from rest_framework.response import Response


@api_view(['POST'])
def create_task(request):
    task_serializer = TaskSerializer(data=request.data)
    if task_serializer.is_valid():
        task_serializer.save()
        return Response(task_serializer.data, status=status.HTTP_201_CREATED)
    return Response(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_sub_task(request):
    sub_task_serializer = SubTaskSerializer(data=request.data)
    if sub_task_serializer.is_valid():
        sub_task_serializer.save()
        return Response(sub_task_serializer.data, status=status.HTTP_201_CREATED)
    return Response(sub_task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_task_status(request, id: int):
    task = Task.objects.filter(id=id)
    status_serializer = TaskStatusSerializer(data=request.data)
    if task and status_serializer.is_valid():
        Task.objects.filter(id=id).update(status=status_serializer.validated_data['status'])
        return Response(status.HTTP_200_OK)
    else:
        return Response(status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_sub_task_status(request, id: int):
    sub_task = Sub_Task.objects.filter(id=id)
    status_serializer = SubTaskStatusSerializer(data=request.data)
    if sub_task and status_serializer.is_valid():
        Sub_Task.objects.filter(id=id).update(status=status_serializer.validated_data['status'])
        return Response(status.HTTP_200_OK)
    else:
        return Response(status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_task(request, id: int):
    specific_task = Task.objects.filter(id=id)
    if not specific_task:
        return Response(f"ERROR: no task found {status.HTTP_404_NOT_FOUND}")
    else:
        specific_task.delete()
        return Response({"Task Deleted"}, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def delete_sub_task(request, id: int):
    specific_sub_task = Sub_Task.objects.filter(id=id)
    if not specific_sub_task:
        return Response(f"ERROR: no task found {status.HTTP_404_NOT_FOUND}")
    else:
        specific_sub_task.delete()
        return Response({"Task Deleted"}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_tasks(request):
    all_tasks = Task.objects.all()
    task_serializer = TaskSerializer(all_tasks, many=True)
    return JsonResponse(task_serializer.data, safe=False)


@api_view(['GET'])
def get_all_sub_tasks(request):
    all_sub_tasks = Sub_Task.objects.all()
    sub_task_serializer = SubTaskSerializer(all_sub_tasks, many=True)
    return JsonResponse(sub_task_serializer.data, safe=False)
