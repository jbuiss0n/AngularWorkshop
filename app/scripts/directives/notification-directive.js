'use strict';

angular
  .module('demoApp')
  
  .directive('notification', [function () {
    return {
      restrict: 'E',
      replace:true,
      controller: function($rootScope, $scope){
        $rootScope.$on('notification', function (message) {
          console.log(message);
        });
      }
    }
  }]);