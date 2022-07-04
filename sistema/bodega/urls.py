from django.urls import path 
from . import views

urlpatterns = [
    path('', views.home,name='home'),
    path('contacto', views.contacto,name='contacto'),
    path('login', views.login,name='login'),
    path('servicios', views.servicios,name='servicios'),
    path('SobreNosotros', views.SobreNosotros,name='SobreNosotros'),
]   