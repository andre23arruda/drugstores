from django.urls import path, include
from rest_framework import routers
from app_example.views import (
    BooksViewSet,
)

# router
router = routers.DefaultRouter()
router.register('example/books', BooksViewSet, basename='Books')

api_urlpatterns = [
    path('api/', include(router.urls)),
]
