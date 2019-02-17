from django.contrib import admin
from django.urls import path
from home import views as home_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view.index, name='index'),
    path('about/', home_view.about, name='about'),
    path('contact/', home_view.contact, name='contact'),
    path('submit/', home_view.submit, name='submit'),
]