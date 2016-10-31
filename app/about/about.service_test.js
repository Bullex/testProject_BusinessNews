"use strict";

describe('bDay.about module', function() {

  beforeEach(module('bDay.about'));

  describe("about api service", function () {
    var AboutService, httpBackend;

    beforeEach(inject(function (_AboutService_, $httpBackend) {
      AboutService = _AboutService_;
      httpBackend = $httpBackend;
    }));

    it("should save changes", function () {

    });

  });
});