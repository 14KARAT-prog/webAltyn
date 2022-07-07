from django.contrib import admin
from .models import Products, Sales

class SalesAdmin(admin.ModelAdmin):
    list_display = ('date', 'name', 'amount')

admin.site.register(Products)
admin.site.register(Sales, SalesAdmin)