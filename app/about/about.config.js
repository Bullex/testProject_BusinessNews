'use strict';

angular
  .module('bDay.about')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/about', {
        title: 'Business News - About',
        templateUrl: 'about/about.view.html',
        controller: 'AboutCtrl'
      });
  }]);