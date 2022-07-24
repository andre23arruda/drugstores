from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from drugstore.models import Drugstore, Medicine
from .serializers import DrugstoreSerializer, MedicineSerializer


class DrugstoresViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Drugstores to be viewed'''
    http_method_names = ['get']
    queryset = Drugstore.objects.filter(is_active=True).order_by('name')
    serializer_class = DrugstoreSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['name']
    pagination_class = None
    search_fields = ['name']


class MedicinesViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Medicines to be viewed'''
    http_method_names = ['get']
    queryset = Medicine.objects.all().order_by('medicine__id_name')
    serializer_class = MedicineSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['medicine__id_name']
    filterset_fields = ['drugstore', 'medicine__category']
    pagination_class = None
    search_fields = ['medicine__name', 'medicine__category']
