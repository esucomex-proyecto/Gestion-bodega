from django.shortcuts import render, redirect
from .models import Articulo
from .forms import FormArticulo



# Create your views here. 
def home(request):
    return render(request,'paginas/home.html')
def contacto(request):
    return render(request,'paginas/contacto.html')   
def login(request):
    return render(request,'paginas/login.html')
def servicios(request):
    return render(request,'paginas/servicios.html')
def SobreNosotros(request):
    return render(request,'paginas/SobreNosotros.html')
 
# CRUD
# Listado de articullos

def articulos(request):
    articulos = Articulo.objects.all()
    datos = {
        'articulos': articulos
    }
    return render(request,'paginas/articulos.html',datos)
# Agregar
def form_articulo(request):
   
    datos = {
        'form': FormArticulo()
    }
    if request.method == 'POST':
        form = FormArticulo(data=request.POST)
        if form.is_valid():
            form.save()
            datos["mensaje"] = 'Datos Guardados'

    return render (request,'paginas/form_articulo.html',datos)
# Modificar
def form_mod_articulo(request, id):

    articulo = Articulo.objects.get(id=id)
    datos = {
        'form': FormArticulo(instance=articulo)
    } 
    if request.method == 'POST':
        form = FormArticulo(data=request.POST,instance = articulo)
        if form.is_valid():
            form.save()
            #datos["mensaje"] = 'Datos Modificados'
        return redirect(to="Articulos")
    return render(request,'paginas/form_mod_articulo.html',datos)
# Eliminar
def eliminar_articulo(request,id):
    articulo = Articulo.objects.get(id=id)
    articulo.delete()
    return redirect(to="Articulos")

