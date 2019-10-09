# Simple Portofolio Website

A simple website made with html, scss, jquery and django as assignment for
applying to Web Development SIG of [Ristek](https://ristek.cs.ui.ac.id/).
The site is deployed to heroku at https://nicolauscg-ri.herokuapp.com/.

## Running locally

Requirements:

- python, https://www.python.org/downloads/
- pipenv, installed by running command `pip install pipenv` (pip comes with 
python)

Once `pipenv` is installed run

```
pipenv shell
pipenv install
python manage.py migrate
python manage.py runserver
```

That's it, just head to `http://127.0.0.1:8000/` to see the site.