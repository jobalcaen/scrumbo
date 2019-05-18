"""{{ project_name }} URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path, re_path, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from scrumbo import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/boards/', views.BoardListView.as_view()),

    path('api/boards/<int:board_id>/', views.BoardView.as_view()),
    path('api/boards/<slug:board_url>/', views.BoardView.as_view()),

    path('api/boards/<int:board_id>/notes/', views.NoteListView.as_view()),
    path('api/boards/<slug:board_url>/notes/', views.NoteListView.as_view()),

    path('api/boards/<int:board_id>/notes/<int:note_id>', views.NoteView.as_view()),
    path('api/boards/<slug:board_url>/notes/<int:note_id>', views.NoteListView.as_view()),
]