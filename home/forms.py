from django import forms
from .models import Comment

class CommentForm(forms.Form):
  author = forms.CharField(
    widget=forms.TextInput(attrs={'class': 'form__text-input', 'value': 'Anonymous'}), 
    label='Author', max_length=20
  )
  message = forms.CharField(
    widget=forms.Textarea(attrs={'class': 'form__text-area', 'placeholder': 'I am currently writing a message', 'rows': '5'}), 
    label='Message', max_length=100
  )