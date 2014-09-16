'use strict';

angular
  .module('demoApp')
  
  .directive('ngNotification', [function () {
    return {
      template: '<h1>{{ message }}</h1>',
      controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.$on('notification', function (event, data) {
          $scope.messsage = data;
        });
      }]
    };
  }]);