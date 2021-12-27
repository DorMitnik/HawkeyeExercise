from django.db import models
import datetime


class Task(models.Model):
    id = models.AutoField(primary_key=True)
    task = models.CharField(max_length=250, null=True, default=None)
    description = models.TextField(null=True, blank=True)
    status = models.BooleanField(default=False)
    deadline = models.DateTimeField(null=True, blank=True)
    creation_date = models.DateTimeField(default=datetime.datetime.utcnow, null=True, blank=True)

    def __str__(self):
        return f"id: {self.id}, task_name: {self.task}, status: {self.status}"


class Sub_Task(models.Model):
    id = models.AutoField(primary_key=True)
    parent_task = models.ForeignKey(Task, on_delete=models.CASCADE, null=True, default=None)
    sub_task_name = models.CharField(max_length=250, null=True, default=None)
    description = models.TextField(null=True, blank=True)
    status = models.BooleanField(default=False)
    deadline = models.DateTimeField(null=True, blank=True)
    creation_date = models.DateTimeField(default=datetime.datetime.utcnow, null=True, blank=True)

    def __str__(self):
        return f"'id': {self.id}, 'sub_task_name': {self.sub_task_name},'status': {self.status}, 'parent_task': {self.parent_task}"
