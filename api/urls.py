from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="hello"),
    path('tasks/', views.getTasks, name="tasks"),
    path('tasks/<str:pk>/update', views.updateNote, name="update-note"),
    path('tasks/<str:pk>/delete', views.deleteNote, name="delete-note"),
    path('tasks/<str:pk>', views.getTask, name="task")

]