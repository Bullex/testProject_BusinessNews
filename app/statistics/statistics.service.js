'use strict';

angular
  .module('bDay.statistics')
  .service('StatisticsService', ['$http', function($http) {
    this.fetch = function() {
      return $http.get('api/statistics.json');
    };
  }]);