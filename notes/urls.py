from django.urls import path
from . import views

urlpatterns = [
    path('', views.notes_list, name='notes_list'),
    path('create/', views.note_create, name='note_create'),
    path('edit/<int:id>/', views.note_edit, name='note_edit'),
    path('delete/<int:id>/', views.note_delete, name='note_delete'),
    path('api/', views.notes_api, name='notes_api'),
    path('api/create/', views.note_create_api, name='note_create_api'),
    path('api/delete/<int:id>/', views.note_delete_api, name='note_delete_api'),
    path('api/<int:id>/', views.note_detail_api, name='note_detail_api'),
    path('api/update/<int:id>/', views.note_update_api, name='note_update_api'),
]