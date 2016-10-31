'use strict';

describe('bDay.statistics module', function() {

  beforeEach(module('bDay.statistics'));

  describe('statistics controller', function(){

    var scope, ctrl;

    it('should be defined', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('StatisticsCtrl', {$scope: scope, statistics: {yData: [], xData: []}});
      expect(ctrl).toBeDefined();
    }));
  });
});