from django.urls import path 
from . import views

urlpatterns = [
    path('', views.home,name='home'),
    path('contacto', views.contacto,name='contacto'),
    path('login', views.login,name='login'),
    path('servicios', views.servicios,name='servicios'),
    path('SobreNosotros', views.SobreNosotros,name='SobreNosotros'),
    # Urls del Crud
    path('articulos', views.articulos,name='Articulos'),
    path('form-articulo', views.form_articulo,name='form_articulo'),
    path('form-mod-articulo/<id>/', views.form_mod_articulo,name='form_mod_articulo'),
    path('eliminar-articulo/<id>/', views.eliminar_articulo,name='eliminar_articulo'),
    
 
]   