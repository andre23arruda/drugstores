from django.contrib import admin
from django.urls import path, include

admin.site.index_title = 'Área de Administração'
admin.site.site_title = 'Estoque de medicamentos'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('drugstore.urls')),
]
