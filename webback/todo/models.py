from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()

    def __str__(self):
        return self.name

class Sales(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="products")
    amount = models.BigIntegerField()