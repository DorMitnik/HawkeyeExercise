from rest_framework import serializers
from .models import Task, Sub_Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'task', 'description', 'status', 'creation_date', 'deadline']


class SubTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sub_Task
        fields = ['id', 'sub_task_name', 'description', 'status', 'parent_task']


class TaskStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['status']


class SubTaskStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sub_Task
        fields = ['status']
