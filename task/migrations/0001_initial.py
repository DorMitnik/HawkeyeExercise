# Generated by Django 3.2.9 on 2021-12-16 12:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('task', models.CharField(max_length=15)),
                ('description', models.CharField(max_length=15)),
                ('status', models.BooleanField(default=False)),
                ('creation_date', models.DateTimeField(default=datetime.datetime.utcnow)),
            ],
        ),
    ]
