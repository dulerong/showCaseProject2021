## What to expect from this web app

As of August 7th, 2021, this web app has the following

### Functionality

- Check birth statistics of a city in Taiwan
- Check Japanese population growth trend (still in construction)

### Layouts

Two layouts
- login layout (login functions not set up yet, just for show)
- main layout

### Features

- Modern styling components such as side drawer, top bar, footer, drop-down menus, etc.
- Light/Dark mode
- Multi-language support (internationalization)

## About this repository (Front end)

Web app constructed with Vue.js framework, with the following ecosystem.

- [Vue Router](https://router.vuejs.org/): client-side navigation and routing
- [Vuex](https://vuex.vuejs.org/): state management
- [Vuetify](https://vuetifyjs.com/en/): component styling
- [Vue-i18n](https://kazupon.github.io/vue-i18n/): multi-language internationalization
- [Axios](https://axios-http.com/): api call
- [Vue-test-utils](https://vue-test-utils.vuejs.org/): componet testing
- [Jest](https://jestjs.io/): unit testing
- [Cypress](https://www.cypress.io/): end-to-end testing
- [Pug](https://pugjs.org/api/getting-started.html): concise HTML template
- [Eslint](https://eslint.org/) integrated with [Prettier](https://prettier.io/): code problem fixing & formatting

Also, the following plugins

- [Day.js](https://day.js.org/): date object library
- [ApexCharts](https://apexcharts.com/): charting library

## About this repository (Back end)

Back end is constructed by laravel, although my main focus is on front end. Not too much work has been done on back end.

## To set up

Following items are pre-requisite for setting up this repository. Install the following if you don't have them.

- composer
- npm

### Git clone

```
git clone this-repository into your local machine
```

### Environment file

I haven't set up database hence DB env variables are not necessary.

```
copy and paste the example env file, and place the following two items into the env file (everything else is default)

APP_KEY=YOUR KEY GENERATED (or run php artisan to generate a key)
MIX_RESAS_KEY=[this is a key you'd need to get from a Japanese government API for data](https://opendata.resas-portal.go.jp/)
```

### Install dependencies

```
composer install
npm install
```

## To start local development server, and compile Vue files

### Start server

```
php artisan serve
```

### Compile Vue files

```
npm run dev
```

### Open browser and navigate to localhost

Default local development server hosted at one of the following, please check them out.

- http://localhost:8000/
- http://127.0.0.1:8000/

## To test

### Unit & Component testing

```
npm run test
```

### End-To-End (e2e) testing

```
npm run cypress open
(Opens Cypress in the interactive GUI)

npm run cypress run
(Runs Cypress tests from the CLI without the GUI)
```

## To lint

```
npm run lint
```