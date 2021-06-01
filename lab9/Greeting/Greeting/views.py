from django.shortcuts import render

def readUser(request):
    return render(request, 'first.html')

def greetUser(request):
    nm = request.GET['a']
    return render(request, 'disp.html', {'name':nm})