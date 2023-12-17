from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.index, name="home"),
    path('map', views.map, name="map"),
    path('index', views.index, name="home"),
    path('video', views.video, name="video"),
    path('login/', views.login_view, name="login"),
    path('register/', views.register_user, name="register"),
    path('profile/', views.profile, name="profile"),
    path('map_user', views.map_user, name="map_user"),
    path('logout/', views.user_logout, name="logout")
]