'use strict';

angular
  .module('bDay.news', [
    'ngRoute',
    'bDay.news.article',
    'bDay.common.date-filter',
    'LocalStorageModule',
    'bDay.news.modal'
  ]);