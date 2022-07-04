from django.shortcuts import render


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




 