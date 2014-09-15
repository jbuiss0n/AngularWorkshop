'use strict';

angular
  .module('demoApp.orders', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('orders', {
        abstract: true,
        url: '/orders',
        templateUrl: 'views/orders/orders.html'
      })
      .state('orders.list', {
        url: '',
        templateUrl: 'views/orders/list.html'
      })
      .state('orders.details', {
        url: '/{id:[0-9]{1,4}}',
        templateUrl: 'views/orders/details.html'
      });
  }]);