'use strict';

describe('bDay.about module', function() {

  beforeEach(module('bDay.about'));

  describe('about controller', function(){

    var scope, ctrl;

    it('should be defined', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('AboutCtrl', {$scope: scope});
      expect(ctrl).toBeDefined();
    }));

    it('should call save method', inject(function() {

    }));

    it('should call convertDescription method', inject(function() {
      scope.company = {
        description: 'Hello<br>World!',
        descriptionText: ''
      };
      scope.isEdit = true;
      scope.convertDescription(false);
      scope.$digest();
      expect(scope.company.descriptionText.length).toEqual(13);
    }));

  });
});