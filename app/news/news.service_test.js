"use strict";

describe('bDay.news module', function() {

  beforeEach(module('bDay.news'));

  describe("news api service", function () {
    var NewsService, httpBackend;

    beforeEach(inject(function (_NewsService_, $httpBackend) {
      NewsService = _NewsService_;
      httpBackend = $httpBackend;
    }));

    it("should fetch news", function () {
      httpBackend.whenGET("api/news.json").respond([
        {
          id: 1,
          likes: 100
        },
        {
          id: 2,
          likes: 123
        }
      ]);
      NewsService.fetch().then(function(result) {
        expect(result.data).toBeDefined();
        expect(result.data.length).toBeDefined();
        expect(result.data.length).toBeGreaterThan(1);
        expect(result.data[1].likes).toEqual(123);
      });
      httpBackend.flush();
    });

    it("should save article", function () {

    });

    it("should like article", function () {

    });

  });
});