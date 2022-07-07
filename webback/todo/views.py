from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from django.db.models import Sum
from django.utils import timezone

from .models import Products, Sales
from .forms import SalesForm

def index(request):
    return render(request, 'todo/home.html')

def products(request):
    products = Products.objects.all()
    sales = Sales.objects.values('name_id').annotate(total=Sum('amount'))
    return render(request, 'todo/products.html', {'products': products, 'sales': sales, 'title': 'Список товаров'})

def sales(request):
    sales = Sales.objects.order_by('-date')
    return render(request, 'todo/sales.html', {'sales': sales, 'title': 'Продажи'})


def redactionSales(request, sales_id):
    sales = get_object_or_404(Sales, pk=sales_id)
    if request.method == 'POST':
        form = SalesForm(request.POST, instance=sales)
        if form.is_valid():
            sales.date = timezone.now()
            sales.name_id = request.POST.get('name')
            sales.amount = request.POST.get('amount')
            sales.save()
        return HttpResponseRedirect('/sales')
    else:
        form = SalesForm(instance=sales)

    return render(request, 'todo/redactionForm.html', {'form': form, 'sales': sales, 'title': 'Продажа'})

def addSales(request):
    if request.method == 'POST':
        form = SalesForm(request.POST)
        if form.is_valid():
            form.date = timezone.now()
            form.name_id = request.POST.get('name')
            form.amount = request.POST.get('amount')
            form.save()
        return HttpResponseRedirect('/sales')
    else:
        form = SalesForm()

    return render(request, 'todo/addForm.html', {'form': form, 'title': 'Добавление продажи'})
