'use strict';

angular
  .module('demoApp')
  
  .factory('HttpInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
    return {
      requestError: function(rejection) {
        $rootScope.$emit('notification', { date: new Date(), message: rejection.data });
        return $q.reject(rejection);
      },
      responseError: function(rejection) {
        $rootScope.$emit('notification', { date: new Date(), message: rejection.data });
        return $q.reject(rejection);
      }
    };
  }])

  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
  }]);