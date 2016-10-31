'use strict';

describe('bDay.common.focus-directive module', function() {

  beforeEach(module('bDay.common.focus-directive'));

  var mockedFactory;
  beforeEach(module('bDay.common.focus-service', function($provide) {
    mockedFactory = jasmine.createSpy();

    $provide.value('focus', mockedFactory);
  }));

  describe('common focus directive', function() {
    it('should show chart', function() {
      inject(function($compile, $rootScope) {
        var element = $compile('<div event-focus="click" event-focus-id="test"></div><input id="test" type="text" value="Hello world!">')($rootScope);
        element[0].click();
        expect(mockedFactory).toHaveBeenCalled();
      });
    });
  });
});