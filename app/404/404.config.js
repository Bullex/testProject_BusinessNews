'use strict';

angular.module('bDay.404')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/404', {
        title: 'Business News - 404',
        templateUrl: '404/404.view.html',
        controller: '404Ctrl'
      });
  }]);