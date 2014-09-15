'use strict';

angular
  .module('demoApp')
  .constant('Current', [function () { //Can be used only in services and controllers
    return {
      user: {
        id: '42',
        name: 'Jérémy Buisson'
      },
      currency: ''
    }
  }]);