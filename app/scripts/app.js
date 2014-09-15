'use strict';

angular
  .module('demoApp', [
    'demoApp.restaurants',
    'demoApp.orders',
    'ui.router'
  ])
  
  .run(['$rootScope', '$state', '$stateParams', 'Current', function ($rootScope, $state, $stateParams, Current) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }])

  .controller('NavigationController', ['$scope', 'Current', 'Currencies', function ($scope, Current, Currencies) {
    $scope.currentCurrency = Current.currency;
    $scope.currencies = Currencies.values;

    $scope.$watch(function () { return $scope.currentCurrency }, function () {
      Current.currency = $scope.currentCurrency;
    });
  }])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      });
  }]);
