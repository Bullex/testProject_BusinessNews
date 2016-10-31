'use strict';

angular
  .module('bDay.contacts')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/contacts', {
        title: 'Business News - Contacts',
        templateUrl: 'contacts/contacts.view.html',
        controller: 'ContactsCtrl'
      });
  }]);