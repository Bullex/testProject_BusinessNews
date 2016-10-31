"use strict";

describe('bDay.common.focus-service module', function() {

  beforeEach(module('bDay.common.focus-service'));

  describe("common focus service", function () {
    var $window, $timeout, focus;

    beforeEach(inject(function(_$window_, _$timeout_, _focus_) {
      $window = _$window_;
      $timeout = _$timeout_;
      focus = _focus_;

      angular.element(document.body).append('<input id="test-input" type="text">');
    }));

    it('should set focus', function() {
      focus('test-input');
      $timeout.flush();

      var inputElement = angular.element(document.activeElement);
      expect(inputElement).toBeDefined();
      expect(inputElement.attr('id')).toEqual('test-input');
    });
  });
});