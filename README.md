# Business News (Test Project)

# [Demo](https://bullex.github.io/testProject_BusinessNews/)

GitPages: https://bullex.github.io/testProject_BusinessNews/

### [Список новостей] (https://bullex.github.io/testProject_BusinessNews/)
### [Список новостей + Edit] (https://bullex.github.io/testProject_BusinessNews/?edit=true)
### [Компания] (https://bullex.github.io/testProject_BusinessNews/about/)
### [Компания + Edit] (https://bullex.github.io/testProject_BusinessNews/about/?edit=true)
### [Редактирование статьи] (https://bullex.github.io/testProject_BusinessNews/news/1/?edit=true)
### [Статистика] (https://bullex.github.io/testProject_BusinessNews/stats/)
### [Контакты] (https://bullex.github.io/testProject_BusinessNews/contacts/)


# Install

**tl;dr**: Run `$ npm install --global gulp && npm install` in the root directory to get started.

## Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x.
If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

### [Gulp](http://gulpjs.com)

Bring up a terminal and type `gulp --version`.
If Gulp is installed it should return a version number at or above 3.9.x.
If you need to install/upgrade Gulp, open up a terminal and type in the following:

```sh
$ npm install --global gulp
```

*This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges.*


### Local dependencies

Next, install the local dependencies this project requires:

```sh
$ npm install
```

# Build

There are many commands available to help you build and test sites. Here are a few highlights to get started with.

## Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.
`serve` does not use [service worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
caching, so your site will stop being available when the web server stops running.

## Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.
Also, a [service worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
script will be automatically generated, which will take care of precaching your sites' resources.
On browsers that [support](https://jakearchibald.github.io/isserviceworkerready/) service
workers, the site will be loaded directly from the service worker cache, bypassing the server.
This means that this version of the site will work when the server isn't running or when there is
no network connectivity.

## Serve the Fully Built & Optimized Site

```sh
$ gulp serve:dist
```

This outputs an IP address you can use to locally test and another that can be used on devices
connected to your network.
`serve:dist` includes will serve a local copy of the built and optimized site generated as part
of the `default` task.
Because the optimized site includes a service worker which serves your site directly from the
cache, you will need to reload the page after regenerating the site to pick up the latest changes.
`serve:dist` uses a different HTTP port than `serve`, which means that the service workers are
kept isolated in different [scopes](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Registering_your_worker).

## Testing

### Running Unit Tests

This app comes with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```