# django-admin-refresh
A refresh for the Django admin in... 2022? I hope?

This is intended as a design refresh to merged into Django.
It's under heavy development and isn't suitable for anything yet.

## Installation

To try this out, you'll need a Django project. If you don't have one,
I've been testing using my
[django-admin-demo](https://github.com/knyghty/django-admin-demo) project.

Install the package:

```bash
pip install django-admin-refresh
```

The release on PyPI is likely to be out of date, so you may want to
install the latest version from GitHub by cloning this repo and
install it locally: `pip install -e /path/to/django-admin-refresh`.

Then add `admin_refresh` it to your `INSTALLED_APPS` **above**
`django.contrib.admin` and `django.contrib.admindocs` if using:

```python
    INSTALLED_APPS = [
        "admin_refresh",
        "django.contrib.admindocs",
        "django.contrib.admin",
        ...
    ]
```

Now you can create yourself a supuerser as normal and log in to the admin site.

## Rationale

The Django admin is one of Django's biggest selling points.
It should be kept up to date with the latest advances in
HTML and CSS in order to keep the framework relevant.

The current admin wasn't designed with accessibility in mind,
and the design is looking a bit dated.

## Goals

- Refresh the admin with some nicer styling.
- Remove unnecessary HTML elements - wrappers and so on.
- Use semantic HTML.
- Switch to CSS grid for layout.
- Get as close to WCAG 2.1 AA as reasonably possible.
- Make the admin more accessible in general.

## Constraints

- We can't touch the views as long as this is a third party package.
- It would be good to leave the translatable strings as untouched as possible.
- Need to figure out if we can replace widgets.

## To decide

- Is it worth changing any JS widgets? The time picker in particular feels a bit useless.
