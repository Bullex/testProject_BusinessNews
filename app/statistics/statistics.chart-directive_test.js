'use strict';

describe('bDay.statistics module', function() {

  beforeEach(module('bDay.statistics'));

  describe('statistics chart directive', function() {
    it('should show chart', function() {
      inject(function($compile, $rootScope) {
        var data = {
          "xData": ["Jan","Feb"],
          "yData": [
            {
              "name":"Tokyo",
              "data": [7,6.9]
            },
            {
              "name":"New York",
              "data":[-0.2,0.8]
            }
          ]
        };
        $rootScope.lineChartXData = data.xData;
        $rootScope.lineChartYData = data.yData;
        var element = $compile('<chart title="Line chart example" xData="lineChartXData" yData="lineChartYData" xName="Month" yName="Hit"></chart>')($rootScope);
        expect(element.length).toEqual(1);
        expect(element[0].tagName).toEqual('DIV');
      });
    });
  });
});