# Generated by Django 3.2.9 on 2021-12-17 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0016_auto_20211217_2324'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sub_task',
            name='deadline',
            field=models.IntegerField(help_text='Min', null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='deadline',
            field=models.IntegerField(help_text='Min', null=True),
        ),
    ]
