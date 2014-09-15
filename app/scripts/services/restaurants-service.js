'use strict';

angular
  .module('demoApp.restaurants.services', [
    'ngResource'
  ])

  .factory('RestaurantsService', ['$resource', function ($resource) { //Singleton
    return $resource('/mock/restaurants/:id.json');
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

  }]);


