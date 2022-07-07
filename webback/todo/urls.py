from django.urls import path,include
from .views import index, products, sales, redactionSales, addSales

urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    path('', index),
    path('products/', products),
    path('sales/', sales),
    path('sales/<int:sales_id>/', redactionSales, name='redaction'),
    path('sales/add', addSales, name='addSales')
]