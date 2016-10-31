'use strict';

angular
  .module('bDay.contacts')
  .controller('ContactsCtrl', ['$scope', function($scope) {
    const FORM_SUCCESS_MESSAGE = 'Your Message has been sent!';

    $scope.form = {
      name: 'Alexander',
      email: 'example@example.com',
      message: '',
      success: ''
    };

    $scope.submit = function() {
      // TODO: validate and send form to server

      // Show user message
      $scope.form.success = FORM_SUCCESS_MESSAGE;
    };
  }]);