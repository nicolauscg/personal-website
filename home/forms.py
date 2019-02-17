from django import forms

class CommentForm(forms.Form):
  author = forms.CharField(label='Author', max_length=20)
  message = forms.CharField(label='Message', max_length=100)