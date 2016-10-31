'use strict';

angular
  .module('bDay.news')
  .config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('businessNews')
      .setStorageCookie(1, '/')
      .setNotify(true, true);

    $routeProvider
      .when('/', {
        title: 'Business News',
        templateUrl: 'news/news.view.html',
        controller: 'NewsCtrl',
        resolve: {
          news: ['NewsService', function(NewsService) {
            return NewsService.fetch().then(function(response) {
              response.data.forEach(function(article) {
                article.date = new Date(article.date);
              });
              return response.data;
            }, function() {
              return [];
            });
          }]
        }
      })
      .when('/news', {
        redirectTo: '/'
      });
  }]);