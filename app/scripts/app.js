'use strict';

angular
  .module('demoApp', [
    'demoApp.restaurants',
    'demoApp.orders',
    'ui.router',
    'ngAnimate'
  ])
  
  .run(['$rootScope', '$state', '$stateParams', '$location', 'Current', function ($rootScope, $state, $stateParams, $location, Current) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$extendLocation = function (params) {
      return angular.extend($location.search(), params);
    };
  }])

  .controller('NavigationController', ['$scope', 'Current', 'Currencies', function ($scope, Current, Currencies) {

    $scope.currentCurrency = Current.currency;
    $scope.currencies = Currencies.values;

    $scope.$watch(function () { return $scope.currentCurrency; }, function () {
      Current.currency = $scope.currentCurrency;
    });
  }])

  .controller('NotificationController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {
    $scope.notifications = [];

    $rootScope.$on('notification', function (event, data) {
      $scope.notifications.push(data);
      $timeout(function () {
        $scope.notifications.splice($scope.notifications.indexOf(data), 1);
      }, 2000);
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
