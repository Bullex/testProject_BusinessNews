'use strict';

angular
  .module('bDay.about')
  .controller('AboutCtrl', ['$scope', '$routeParams', '$sce', 'AboutService',  function($scope, $routeParams, $sce, AboutService) {
    $scope.isEdit = $routeParams.edit === "true";

    $scope.company = {
      description: "Business Day - is an American daily newspaper, founded and continuously published in New York City since September 18, 1851, by The New York Times Company. The New York Times has won 117 Pulitzer Prizes, more than any other news organization<br><br>The paper's print version has the second-largest circulation, behind The Wall Street Journal, and the largest circulation among the metropolitan newspapers in the United States of America. The New York Times is ranked 39th in the world by circulation. Following industry trends, its weekday circulation has fallen to fewer than one million daily since 1990.<br><br>Nicknamed \"The Gray Lady\", The New York Times has long been regarded within the industry as a national \"newspaper of record\". The New York Times is owned by The New York Times Company. Arthur Ochs Sulzberger, Jr., the Publisher and the Chairman of the Board, is a member of the Ochs-Sulzberger family that has controlled the paper since 1896. The New York Times international version, formerly the International Herald Tribune, is now called the International New York Times.",
      descriptionText: "",
      foundingDate: new Date("06.19.1990"),
      numberOfEmployees: 18,
      founderName: "Alexander Abumov"
    };
    $scope.company.trustedDescription = $sce.trustAsHtml($scope.company.description);

    $scope.save = function() {
      AboutService.save($scope.company);
    };

    $scope.convertDescription = function(fromText) {
      if ($scope.isEdit) {
        if (fromText) {
          // Remove all tags
          $scope.company.descriptionText = $scope.company.descriptionText.replace(/(<([^>]+)>)/ig, '');
          $scope.company.description = $scope.company.descriptionText.replace(/(?:\r\n|\r|\n)/g, '<br>');
          $scope.company.trustedDescription = $sce.trustAsHtml($scope.company.description);
        } else {
          // Remove all tags
          $scope.company.descriptionText = $scope.company.description.replace(/(<br>)/g, '\r\n');
        }
      }
    };
  }]);