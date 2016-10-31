'use strict';

describe('bDay.common.date-filter module', function() {

  beforeEach(module('bDay.common.date-filter'));

  describe('common date filter', function() {
    it('should convert date', function() {
      inject(function($compile, $rootScope, $filter) {
        expect($filter('date')("06.19.1990")).toEqual('June 19, 1990');
        expect($filter('date')("19.06.1990")).toEqual('Invalid Date');
      });
    });
  });
});