## prismic.io Page Starter for NodeJS (uses express and jade)

### Getting started

Blog Starter is a Page template backed by prismic.io CMS.

#### Setting up prismic.io

##### Create your own account and repo on [prismic.io](https://prismic.io/signup).

Create the Custom Type of your page in prismic.io Writing-room

* Navigate to `Setting` / `Custom types`

* Create a new `type-id` and and a `Type label` that correspond to a page. for example `page`, `Page`.

* Start with using this [sample page Custom Type](https://gist.github.com/faresd/0fc8a96ee35a0192fc6d).
  * This type contains 4 different slices alternated-highlights, featured-items, slides and a separator as well as a uid (a unique identifier) and a title for your page.

##### Custom Type instance (document)

Create an instance of you custom types

* Navigate to `Your documents` / `Write something`
* Choose the custom type you have created
* Start by adding your page content `Slices` on the left side `Add a Content Slice...` (`Slides`, `Featured Items`, `Alternated Highlights`, `separator`)
* Finally add your page url `unique-identifier-for-page-url` in Metadata tab (uid) and you Page meta title for example : `page-starter-sample-page`, `Page Starter Sample Page`
* Save and publish


#### prismic.io Page Starter for Javascript Node.JS

* Download the [latest release]()
* Unzip locally or on your server

Edit the `prismic-configuration.js` file to get the application connected to the right repository:

```
exports.Configuration = {

  apiEndpoint: 'https://lesbonneschoses.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',
  ...
```

* Install [npm & node](https://www.npmjs.com/package/npm)

To run it on your local machine, 2 possibilities:

In command line:
* using [nodemon](https://github.com/remy/nodemon) (node wrapper)
```
npm install -g nodemon
```
```
nodemon app
```

* using node
```
npm install
```
```
node app
```
You are all set, just navigate to `/page-starter-sample-page` to open your Page...

#### Further development

This Website Starter uses [Jade - Template Engine](http://jade-lang.com/).

To adapt the design of your web site; you can modify the corresponding slices in jade located in: `/views`.


#### Deploy your NodeJS application

An easy way to deploy your NodeJS application is to use [Heroku](http://www.heroku.com). Just follow these few simple steps once you have successfully [signed up](https://id.heroku.com/signup/www-header) and [installed the Heroku toolbelt](https://toolbelt.heroku.com/):

Create a `Procfile` file at your application root, to declare the server command:

```
web: node app.js
```

Create a new Heroku application

```
$ heroku create
```

Push your code to heroku:

```
$ git push heroku master
```

Ensure you have at least one node running:

```
$ heroku ps:scale web=1
```

You can now browse your application online:

```
$ heroku open
```

#### Get started with prismic.io

You can find out [how to get started with prismic.io](https://developers.prismic.io/documentation/UjBaQsuvzdIHvE4D/getting-started) on our [prismic.io developer's portal](https://developers.prismic.io/).

#### Understand the JavaScript development kit

You'll find more information about how to use the development kit included in this starter project, by reading [its README file](https://github.com/prismicio/javascript-kit/blob/master/README.md).

### Contribute to the starter project

Contribution is open to all developer levels, read our "[Contribute to the official kits](https://developers.prismic.io/documentation/UszOeAEAANUlwFpp/contribute-to-the-official-kits)" documentation to learn more.

### Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013 Zengularity (http://www.zengularity.com).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.