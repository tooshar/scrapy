# Scrapy
Scrape out top 15 Google Images of any keyword.
Save the Images in your local HDD.

 `Angular 2+`  `Node.js`  `MongooseJs`  `ExpressJs` 

## How to run this app:

### Method 1:

Run `ng serve` for a dev server of Scrapy-FE. Navigate to `http://localhost:4200/`.
Run `nodemon` or `node index.js` in Scrapy-BE for backend-api. 

### Method 2:

Run `ng build` to build the Scrapy-FE project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
Then paste the `dist/` folder in Scrapy-BE.
Now only run `nodemon` in Scrapy-BE. Navigate to `http://localhost:3000/`

## Note

Add Allow-Control-Allow-Origin: * v1.0.3 `browser extension`, available in Google Chrome.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
