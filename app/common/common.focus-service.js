'use strict';

angular
  .module('bDay.common.focus-service', [])

  .factory('focus', ['$timeout', '$window', function($timeout, $window) {
    return function(id) {
      $timeout(function() {
        var element = $window.document.getElementById(id);
        if(element)
          element.focus();
      });
    };
  }]);