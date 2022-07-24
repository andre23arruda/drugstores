from django.contrib import admin, messages

from django.conf.locale.pt_BR import formats as portuguese
from django.conf.locale.en import formats as english
from .models import MedicineRegister, Drugstore, Medicine


portuguese.DATE_FORMAT = 'd/m/Y'
english.DATE_FORMAT = 'd/m/Y'

@admin.register(MedicineRegister)
class MedicineRegisterAdmin(admin.ModelAdmin):
    exclude = ['id_name']
    list_display = ['name', 'category', 'created_at']
    list_display_links = ['name']
    list_filter = ['category']
    list_per_page = 25
    ordering = ['id_name']
    search_fields = ['name', 'category']

    # def raw_name(self, obj):
    #     import unicodedata
    #     nfkd_form = unicodedata.normalize('NFKD', obj.name)
    #     return (nfkd_form.encode('ASCII', 'ignore')).decode("utf-8")
    # raw_name.short_description = 'Raw name'


@admin.register(Drugstore)
class DrugstoreAdmin(admin.ModelAdmin):
    autocomplete_fields = ['users']
    list_display = ['name', 'phone', 'created_at', 'is_active']
    list_display_links = ['name', 'phone']
    list_filter = ['is_active']
    list_per_page = 25
    ordering = ['name']
    search_fields = ['name']


@admin.register(Medicine)
class MedicineAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        queryset = super(MedicineAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return queryset
        return queryset.filter(drugstore__users=request.user)

    def get_list_filter(self, request):
        list_filter = ['medicine__category']
        if request.user.is_superuser:
            list_filter.append('drugstore')
        return list_filter

    def message_user(self, *args): # overridden method
        pass

    def save_model(self, request, obj, form, change):
        user = request.user
        if Medicine.objects.filter(medicine=obj.medicine, drugstore=obj.drugstore).exists():
            messages.add_message(request, messages.WARNING, 'This medicine already exists!')
        else:
            if user.is_superuser or user in obj.drugstore.users:
                obj.save()
                messages.add_message(request, messages.SUCCESS, f'{ obj.medicine.name } added to { obj.drugstore.name } successfully!')
            else:
                messages.add_message(request, messages.ERROR, 'You can not make this change!')

    list_display = ['medicine', 'category', 'drugstore', 'in_stock']
    list_display_links = ['medicine', 'category']
    list_editable = ['in_stock']
    list_filter = ['medicine__category']
    list_per_page = 105
    ordering = ['drugstore', 'medicine__id_name']
    search_fields = ['medicine__name', 'medicine__id_name', 'medicine__category']

    def category(self, obj):
        return obj.medicine.category
