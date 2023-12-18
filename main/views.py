from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import LoginForm, SignUpForm, CountryForm
from .models import Country

def index(request):
    return render(request, 'main/index.html')

def map(request):
    return render(request, 'main/map.html')

def video(request):
    return render(request, 'main/video.html')

def map_user(request):
    return render(request, 'main/map_user.html')    
    
def login_view(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":

        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("/profile/")
            else:
                msg = 'Invalid credentials'
        else:
            msg = 'Error validating the form'

    return render(request, "main/login.html", {"form": form, "msg": msg})

def register_user(request):
    msg = None
    success = False

    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            raw_password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=raw_password)

            success = True

            return redirect("/login/")

        else:
            msg = 'Form is not valid'
    else:
        form = SignUpForm()

    return render(request, "main/register.html", {"form": form, "msg": msg, "success": success})


def user_logout(request):
    logout(request)
    return redirect('home')


@login_required
def profile(request):
    user_countries = Country.objects.filter(user=request.user)

    if request.method == 'POST':
        form = CountryForm(request.POST)
        if form.is_valid():
            country = form.save(commit=False)
            country.user = request.user
            country.save()
    else:
        form = CountryForm()

    data = {'form': form, 'user_countries': user_countries}
    return render(request, 'main/profile.html', data)