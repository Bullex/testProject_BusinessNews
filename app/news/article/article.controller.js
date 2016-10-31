'use strict';

angular
  .module('bDay.news.article')
  .controller('ArticleCtrl', ['$scope', 'article', '$routeParams', '$sce', function($scope, article, $routeParams, $sce) {
    $scope.isEdit = $routeParams.edit === "true";
    $scope.article = article;
    $scope.editArticle = {};
    $scope.saved = false;

    if ($scope.isEdit) {
      $scope.editArticle = angular.copy($scope.article);

      $scope.save = function() {
        //TODO: validation and send changes to server

        $scope.article = angular.copy($scope.editArticle);
        $scope.article.trustedText = $sce.trustAsHtml($scope.article.text);
        $scope.saved = true;
      }
    }
  }]);