'use strict';

angular
  .module('bDay', [
    'ngRoute',
    'bDay.404',
    'bDay.news',
    'bDay.statistics',
    'bDay.about',
    'bDay.contacts'
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/404'});
  }])
  .run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
      document.title = $route.current.title;
    });
  }]);