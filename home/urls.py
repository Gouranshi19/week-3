from django.contrib import admin
from django.urls import path, include
from home import views

urlpatterns = [
    path('notes/', include('notes.urls')),
    path('', views.index, name="home"),
    path('login', views.loginUser, name="login"),
    path('logout', views.logoutUser, name="logout"),
    path('signup/', views.signup, name='signup'),
    path('test-users/', views.test_users, name='test_users'),
    

]
