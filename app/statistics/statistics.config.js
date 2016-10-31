'use strict';

angular
  .module('bDay.statistics')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/stats', {
        title: 'Business News - Statistics',
        templateUrl: 'statistics/statistics.view.html',
        controller: 'StatisticsCtrl',
        resolve: {
          statistics: ['StatisticsService', function(StatisticsService) {
            return StatisticsService.fetch().then(function(response) {
              return response.data;
            }, function() {
              return {xData: [], yData: []};
            });
          }]
        }
      })
      .when('/news', {
        redirectTo: '/'
      });
  }]);