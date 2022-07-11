from django import forms
from .models import Sales,Products


class SalesForm(forms.ModelForm):

    class Meta:
        model = Sales
        fields = ('name', 'amount')