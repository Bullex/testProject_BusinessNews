module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-messages/angular-messages.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
      'app/app.js',
      'app/common/common.date-filter.js',
      'app/common/common.focus-service.js',
      'app/common/common.focus-directive.js',
      'app/news/news.js',
      'app/news/news.config.js',
      'app/news/news.controller.js',
      'app/news/news.service.js',
      'app/news/article/article.js',
      'app/news/article/article.config.js',
      'app/news/article/article.controller.js',
      'app/news/modal/modal.js',
      'app/news/modal/modal.directive.js',
      'app/statistics/statistics.js',
      'app/statistics/statistics.chart-directive.js',
      'app/statistics/statistics.config.js',
      'app/statistics/statistics.controller.js',
      'app/statistics/statistics.service.js',
      'app/about/about.js',
      'app/about/about.config.js',
      'app/about/about.controller.js',
      'app/about/about.service.js',
      'app/contacts/contacts.js',
      'app/contacts/contacts.config.js',
      'app/contacts/contacts.controller.js',
      'app/404/404.js',
      'app/404/404.config.js',
      'app/404/404.controller.js',
      'app/**/*_test.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};