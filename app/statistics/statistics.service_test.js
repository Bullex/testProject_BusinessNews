"use strict";

describe('bDay.statistics module', function() {

  beforeEach(module('bDay.statistics'));

  describe("statistics api service", function () {
    var StatisticsService, httpBackend;

    beforeEach(inject(function (_StatisticsService_, $httpBackend) {
      StatisticsService = _StatisticsService_;
      httpBackend = $httpBackend;
    }));

    it("should fetch statistics", function () {
      httpBackend.whenGET("api/statistics.json").respond({
        yData: ["Tokyo", "Japan"],
        xData: ["Jan"]
      });
      StatisticsService.fetch().then(function(result) {
        expect(result.data).toBeDefined();
        expect(result.data.xData).toBeDefined();
        expect(result.data.xData.length).toEqual(1);
        expect(result.data.xData[0]).toEqual("Jan");
      });
      httpBackend.flush();
    });
  });
});