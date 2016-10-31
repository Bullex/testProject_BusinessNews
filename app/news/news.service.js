'use strict';

angular
  .module('bDay.news')
  .service('NewsService', ['$http', function($http) {
    this.fetch = function() {
      return $http.get('api/news.json');
    };
    this.save = function(article) {

    };
    this.like = function(id) {

    };
  }]);