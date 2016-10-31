'use strict';

angular
  .module('bDay.news.article')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/news/:id', {
        title: 'Business News',
        templateUrl: 'news/article/article.view.html',
        controller: 'ArticleCtrl',
        resolve: {
          article: ['$route', '$location', 'NewsService', '$sce', '$filter', function($route, $location, NewsService, $sce, $filter) {
            return NewsService.fetch().then(function(response) {
              var article = response.data.find(function(article) {
                if (article.id == $route.current.params.id) {
                  article.trustedText = $sce.trustAsHtml(article.text);
                  article.date = new Date(article.date);
                  return article;
                }
              });
              return article || $location.path('/404');
            }, function() {
              $location.path('/404');
            });
          }]
        }
      });
  }]);