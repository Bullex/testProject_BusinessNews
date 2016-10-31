'use strict';

describe('bDay.contacts module', function() {

  beforeEach(module('bDay.contacts'));

  describe('contacts controller', function(){

    var scope, ctrl;

    it('should be defined', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('ContactsCtrl', {$scope: scope});
      expect(ctrl).toBeDefined();
    }));

    it('should call submit method', inject(function() {
      scope.submit();
      scope.$digest();
      expect(scope.form.success).not.toEqual('');
    }));

  });
});