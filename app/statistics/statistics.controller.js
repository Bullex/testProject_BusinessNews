'use strict';

angular
  .module('bDay.statistics')
  .controller('StatisticsCtrl', ['$scope', 'statistics', function($scope, statistics) {
    $scope.lineChartYData = statistics.yData;
    $scope.lineChartXData = statistics.xData;
  }]);