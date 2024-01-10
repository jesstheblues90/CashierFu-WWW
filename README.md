# CashierFu WWW

## Setup

Make sure to install the dependencies:

```bash
npm install
```

Ensure that you have `service-account.json` credentials file from Firebase in root of project:
[https://firebase.google.com/docs/admin/setup](https://firebase.google.com/docs/admin/setup)

You must also have both `.env` and `.env.prod` files in the root of the project. See example files.

## Development Server

Start the development server on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

## Deploy

```bash
npm install -g firebase-tools #if needed
firebase login # if needed

firebase deploy --only functions:server, hosting # --OR--
npm run deploy
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
