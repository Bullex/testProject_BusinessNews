'use strict';

describe('bDay.news module', function() {

  beforeEach(module('bDay.news'));

  describe('news controller', function(){

    var scope, ctrl;

    it('should be defined', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('NewsCtrl', {$scope: scope, news: []});
      expect(ctrl).toBeDefined();
    }));

    it('should call like method', inject(function() {
      scope.news.push({
        id: 1,
        liked: false,
        likes: 100
      });
      scope.like(1);
      scope.$digest();
      expect(scope.news[0].likes).toEqual(101);
    }));

    it('should call toggleModal method', inject(function() {
      scope.toggleModal();
      expect(scope.modalShown).toEqual(true);
    }));

  });
});