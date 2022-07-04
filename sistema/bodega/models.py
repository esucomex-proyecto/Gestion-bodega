from django.db import models

# Create your models here.

# Modelo Categoria
class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True, verbose_name ='Id Categoria')
    nombreCategoria = models.CharField(max_length=50, verbose_name = 'Nombre Categoria')

    def __str__(self):
        return self.nombreCategoria

# Modelo Articulos

class Articulo(models.Model):
    Nombre = models.CharField(max_length=50, verbose_name = 'Nombre')
    Modelo = models.CharField(max_length=50, null=True, blank=True, verbose_name = 'Modelo')
    Ubicacion = models.CharField(max_length=50,null=True,blank=True,verbose_name ='Ubicacion')
    Categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return self.Nombre

