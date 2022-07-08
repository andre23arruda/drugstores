from django.urls import path, include
from rest_framework import routers

from drugstore.api.viewsets import DrugstoresViewSet, MedicinesViewSet

app_name = 'drugstore'

router = routers.DefaultRouter(trailing_slash=False)
router.register('drugstores/?', DrugstoresViewSet, basename='Drugstores')
router.register('medicines/?', MedicinesViewSet, basename='Medicines')

urlpatterns = [
    path('api/', include(router.urls)),
]
