from django.urls import path
from .views import create_task, create_sub_task, update_task_status, update_sub_task_status, delete_task, delete_sub_task, get_all_tasks, get_all_sub_tasks

urlpatterns = [
    path('create_task/', create_task),
    path('create_sub_task/', create_sub_task),
    path('update_task_status/<int:id>', update_task_status),
    path('update_sub_task_status/<int:id>', update_sub_task_status),
    path('delete_task/<int:id>', delete_task),
    path('delete_sub_task/<int:id>', delete_sub_task),
    path('get_all_tasks/', get_all_tasks),
    path('get_all_sub_tasks/', get_all_sub_tasks)
]
