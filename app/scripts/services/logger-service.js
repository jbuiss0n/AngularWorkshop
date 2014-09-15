'use strict';

angular
  .module('demoApp')
  .constant('LoggerLevel', [function () { //can be used in module.config
    return { value: 'DEBUG' };
  }])
  .factory('LoggerService', ['LoggerLevel', function (LoggerLevel) {
    var levels = ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']
    var logger = {};

    var isEnable = function (level) {
      return levels.indexOf(level) >= levels.indexOf(LoggerLevel.value);
    }

    logger.log = function (level, message) {
      if (!isEnable(level))
        return;

      console.log(message);
    };

    return logger;
  }]);