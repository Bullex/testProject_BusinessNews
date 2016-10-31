'use strict';

angular
  .module('bDay.common.date-filter', [])

  .filter('date', [function() {
    return function(date) {
      return (date instanceof Date ? date : new Date(date)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) || "";
    };
  }]);