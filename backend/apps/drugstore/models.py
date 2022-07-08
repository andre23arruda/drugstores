from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _

from utils.text_utils import text_to_id


class MedicineRegister(models.Model):
    TAGS = (
        ('Aerossol', 'Aerossol'),
        ('Ampola', 'Ampola'),
        ('Comprimido', 'Comprimido'),
        ('Creme', 'Creme'),
        ('Gel', 'Gel'),
        ('Gotas', 'Gotas'),
        ('Injetável', 'Injetável'),
        ('Loção', 'Loção'),
        ('Pomada', 'Pomada'),
        ('Suspensão', 'Suspensão'),
        ('Xarope', 'Xarope'),
    )

    created_at = models.DateField(auto_now_add=True, verbose_name=_('Created at'))
    updated_at = models.DateField(auto_now=True, verbose_name=_('Updated at'))
    name = models.CharField(max_length=50, verbose_name=_('Name'))
    id_name = models.CharField(max_length=50, default='', blank=True, verbose_name=_('ID name'))
    # category = models.CharField(max_length=50, blank=True, verbose_name=_('Category'))
    category = models.CharField(max_length=50, choices=TAGS, blank=True, default='Comprimido')

    class Meta:
        verbose_name = _('Register medicine')
        verbose_name_plural = _('Register medicines')

    def save(self, *args, **kwargs):
        self.id_name = text_to_id(self.name)
        super(MedicineRegister, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Drugstore(models.Model):
    created_at = models.DateField(auto_now_add=True, verbose_name=_('Created at'))
    updated_at = models.DateField(auto_now=True, verbose_name=_('Updated at'))
    name = models.CharField(max_length=50, verbose_name=_('Name'))
    address = models.TextField(blank=True, verbose_name=_('Address'))
    users = models.ManyToManyField(User, related_name='drugstores', null=True, verbose_name=_('Users'))
    is_active = models.BooleanField(default=True, verbose_name=_('Is active'))

    class Meta:
        verbose_name = _('Drugstore')
        verbose_name_plural = _('Drugstores')

    def __str__(self):
        return self.name


class Medicine(models.Model):
    created_at = models.DateField(auto_now_add=True, verbose_name=_('Created at'))
    updated_at = models.DateField(auto_now=True, verbose_name=_('Updated at'))
    medicine = models.ForeignKey(MedicineRegister, on_delete=models.CASCADE, verbose_name=_('Medicine register'))
    drugstore = models.ForeignKey(Drugstore, related_name='medicines', on_delete=models.CASCADE, verbose_name=_('Drugstore'))
    in_stock = models.BooleanField(default=True, verbose_name=_('In stock'))

    class Meta:
        verbose_name = _('Medicine')
        verbose_name_plural = _('Medicines')

    def __str__(self):
        return f'{ self.drugstore.name } - { self.medicine.name }'


@receiver(post_save, sender=Drugstore)
def create_drugstore_signal(sender, instance, created, **kwargs):
    '''Cria instâncias Medicine vinculadas a Drugstore criada'''
    if created:
        medicines = []
        medicines_register = MedicineRegister.objects.all()
        for register in medicines_register:
            medicines.append(Medicine(medicine=register, drugstore=instance))
        Medicine.objects.bulk_create(medicines)
