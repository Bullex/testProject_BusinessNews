'use strict';

angular
  .module('bDay.news.modal')
  .directive('modalDialog', function() {
    return {
      restrict: 'E',
      scope: {
        show: '=',
        article: '=',
        save: '='
      },
      transclude: true,
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.boxWidth) {
          scope.dialogStyle.width = attrs.boxWidth;
        }
        if (attrs.boxHeight) {
          scope.dialogStyle.height = attrs.boxHeight;
        }
        scope.hideModal = function() {
          scope.show = false;
        };
        scope.saveChanges = function(modalArticle) {
          scope.save(modalArticle);
          scope.hideModal();
        };
      },
      templateUrl: 'news/modal/modal.view.html'
    };
  });
