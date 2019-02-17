from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Comment
from .forms import CommentForm

def index(request):
  return render(request, 'index.html')

def about(request):
  return render(request, 'about.html')

def contact(request):
  context = {
    'comments': Comment.objects.all(), 
    'form': CommentForm()
  }
  return render(request, 'contact.html', context)

def submit(request):
  if request.method == 'POST':
    form = CommentForm(request.POST)
    if form.is_valid():
      Comment.objects.create(author=form.cleaned_data['author'], message=form.cleaned_data['message'])
      return HttpResponseRedirect('/contact')
  
  return HttpResponse('something went wrong')


