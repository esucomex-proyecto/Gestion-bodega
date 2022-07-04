from django import forms
from django.forms import ModelForm
from .models import Articulo
from .models import Categoria

# Clase Formulario 

class FormArticulo(forms.ModelForm):
    class Meta:
        model = Articulo
        fields = ['Nombre','Modelo','Ubicacion','Categoria']

       