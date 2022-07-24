from rest_framework import serializers
from drugstore.models import Medicine, Drugstore

class MedicineSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    def get_name(self, obj):
        return obj.medicine.name

    class Meta:
        model = Medicine
        fields = '__all__'


class DrugstoreSerializer(serializers.ModelSerializer):
    stock = serializers.SerializerMethodField()
    def get_stock(self, obj):
        return obj.medicines.filter(in_stock=True).count()

    class Meta:
        model = Drugstore
        fields = ['id', 'name', 'address', 'phone', 'stock']