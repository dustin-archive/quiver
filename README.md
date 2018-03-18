
# <img src=favicon.png height=24> @whaaaley/quiver

> Product lists, ratings, and reviews.

[**View Demo**](https://quiver.netlify.com/)

![favicon](favicon.png)

## Install and Setup

```
make setup
```

## Scripts

Ensure you have GNU make version 3.8.2 or above.

[See `Makefile` for details.](Makefile)

### Start development

Start a development server at [`http://localhost:3000/`](http://localhost:3000/) and watch for changes.

```
make start
```

### Build for production

Set `NODE_ENV='production'` in your `.env` file.

```
make
```

## Deployment

This project uses Netlify to deploy when commits are pushed to master.

[View the Netlify dashboard for this project.](https://app.netlify.com/sites/quiver)
