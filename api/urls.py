from django.urls import path, include
from .views import NoteListView, NoteDetailView, NoteViewSet, register
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'notes', NoteViewSet, basename='note')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', register, name='register'),
]