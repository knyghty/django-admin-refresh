# django-admin-refresh
A refresh for the Django admin in... 2022? I hope?

This is intended as a design refresh to merged into Django.
It's under heavy development and isn't suitable for anything yet,
but will be released on pypi when it has some form of usability.

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
- Need to figure out if we can replace widgets.

## To decide

- Is it worth changing any JS widgets? The time picker in particular feels a bit useless.
