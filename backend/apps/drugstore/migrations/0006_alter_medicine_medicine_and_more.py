# Generated by Django 4.0.6 on 2022-08-17 23:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('drugstore', '0005_drugstore_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicine',
            name='medicine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='drugstore.medicineregister', verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='medicineregister',
            name='category',
            field=models.CharField(blank=True, choices=[('Aerossol', 'Aerossol'), ('Ampola', 'Ampola'), ('Comprimido', 'Comprimido'), ('Creme', 'Creme'), ('Gel', 'Gel'), ('Gotas', 'Gotas'), ('Injetável', 'Injetável'), ('Loção', 'Loção'), ('Pomada', 'Pomada'), ('Suspensão', 'Suspensão'), ('Xarope', 'Xarope')], default='Comprimido', max_length=50, verbose_name='Category'),
        ),
        migrations.AlterField(
            model_name='medicineregister',
            name='id_name',
            field=models.CharField(blank=True, default='', max_length=100, verbose_name='ID name'),
        ),
        migrations.AlterField(
            model_name='medicineregister',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Name'),
        ),
    ]
