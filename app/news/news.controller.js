'use strict';

angular
  .module('bDay.news')
  .controller('NewsCtrl', ['$scope', 'news', '$timeout', 'localStorageService', 'NewsService', '$routeParams', function($scope, news, $timeout, localStorageService, NewsService, $routeParams) {
    $scope.isEdit = $routeParams.edit === "true";
    $scope.news = news;
    $scope.modalShown = false;
    $scope.modalArticle = {};

    $scope.like = function(id) {
      $scope.news.forEach(function(article) {
        if (article.id == id) {
          if (article.liked) {
            article.likes--;
          } else {
            article.likes++;
          }
          article.liked = !article.liked;
          checkLikeStorage(id, article.liked);
        }
      });
      NewsService.like(id);
    };

    $scope.toggleModal = function(id) {
      $scope.modalShown = !$scope.modalShown;
      var article = $scope.news.find(function(article) {
        if (article.id == id) {
          return article;
        }
      });
      $scope.modalArticle = angular.copy(article);
    };

    $scope.save = function(modalArticle) {
      var id = modalArticle.id;
      for(var ind = 0; ind < $scope.news.length; ind++) {
        if ($scope.news[ind].id == id) {
          $scope.news[ind] = angular.copy(modalArticle);
          console.log($scope.news[ind]);
        }
      }

      //TODO: send changes to server
    };

    $timeout(function() {
      checkLikeStorage();
    });

    var checkLikeStorage = function(id, isLike) {
      if(localStorageService.isSupported) {
        var likedIds = localStorageService.get('liked') || [];
        if (likedIds.length) {
          if (!id) {
            var newsMap = $scope.news.map(function (article) {
              return article.id;
            });
            likedIds.forEach(function (id) {
              var articlePos = newsMap.indexOf(id);
              if (articlePos >= 0) {
                $scope.news[articlePos].liked = true;
                $scope.news[articlePos].likes++;
              }
            });
          } else {
            if (!isLike) {
              var likedIdPos = likedIds.indexOf(id);
              if (likedIdPos >= 0) {
                while (likedIdPos !== -1) {
                  likedIds.splice(likedIdPos, 1);
                  likedIdPos = likedIds.indexOf(id);
                }
                localStorageService.set('liked', likedIds);
              }
            }
          }
        }
        if (id && isLike) {
          likedIds.push(id);
          localStorageService.set('liked', likedIds);
        }
      }
    }
  }]);