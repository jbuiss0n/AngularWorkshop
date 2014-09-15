'use strict';

angular
  .module('demoApp.restaurants', [
    'demoApp.restaurants.services',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('restaurants', {
        abstract: true,
        url: '/restaurants',
        templateUrl: 'views/restaurants/restaurants.html',
        controller: ['$scope', 'RestaurantsService', function ($scope, RestaurantsService){
          RestaurantsService.query({}, function (restaurants) {
            $scope.restaurants = restaurants;
          });
        }]
      })

      .state('restaurants.list', {
        url: '',
        views: {
          '' : { 
            templateUrl: 'views/restaurants/list.html',
          },
          'promo': {
            template: 'Some generalist promo'
          }
        }
        
      })

      .state('restaurants.detail', {
        url: '/{id:[0-9]{1,4}}',
        views: {
          '' : {
            templateUrl: 'views/restaurants/detail.html',
            controller: ['$scope', '$stateParams', 'Current', 'RestaurantsService', 'CurrencyExchange', function ($scope, $stateParams, Current, RestaurantsService, CurrencyExchange) {
              RestaurantsService.get({id : $stateParams.id }, function (restaurant) {
                $scope.restaurant = restaurant;

                $scope.getCurrencyValue = function (value) {
                  return CurrencyExchange.convert(value, '€', Current.currency.symbol);
                };

                $scope.getCurrencySymbol = function () {
                  return Current.currency.symbol;
                };
              });
            }]
          },
          'promo': {
            template: 'Some specific promo'
          },
          'hint@': {
            template: 'Hoho'
          }
        },
        
      });
  }]);