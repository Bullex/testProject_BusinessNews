'use strict';

describe('bDay.news.article module', function() {

  beforeEach(module('bDay.news.article'));

  describe('article controller', function(){

    var scope, ctrl;

    it('should be defined', inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('ArticleCtrl', {$scope: scope, article: {}});
      expect(ctrl).toBeDefined();
    }));

  });
});