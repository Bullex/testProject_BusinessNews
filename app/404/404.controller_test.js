'use strict';

describe('bDay.404 module', function() {

  beforeEach(module('bDay.404'));

  describe('404 controller', function(){

    var scope, ctrl;

    it('should be defined', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('404Ctrl', {$scope: scope});
      expect(ctrl).toBeDefined();
    }));
  });
});