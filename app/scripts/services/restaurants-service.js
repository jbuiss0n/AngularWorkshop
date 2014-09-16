'use strict';

angular
  .module('demoApp.restaurants.services', [
    'ngResource'
  ])

  .factory('RestaurantsService', ['$rootScope', '$resource', function ($rootScope, $resource) { //Singleton

    return $resource('/mock/restaurants/:id.json');

    var restaurants;
    var handlers;

    return {
      query: function (cb) {
        $http.get('/mock/restaurants.json').then(function(res) {
          restaurants = res.data
          cb(restaurants);
        });
        return restaurants;
      }
    };
  }])

  .service('RestaurantModel', [function () { //Instanciate each time
    var menu = [];

    this.add = function (item) {
      menu.push(item);
    };

    this.remove = function (item) {
      var index = menu.indexOf(item);
      if (index != -1) {
        menu.splice(index, 1);
      }
    };

    this.count = function () {
      return menu.length;
    };

    return this;
  }]);


