
'use strict';

angular
  .module('demoApp')

  .constant('Currencies', { values: [] })

  .provider('CurrencyExchange', ['Currencies', function CurrencyExchangeProvider(Currencies) {
    //  €     $       £
    //  1     1.29    0.8
    //  x * c1  =  x * c2
    //  x = (x * c2) / c1
    //  10$   = x€ = 10 * 1 / 1.29 = 7.75€
    //  10€   = x$ = 10 * 1.29 / 1 = 10$

    //  10£   = x$ = 10 * 0.8 / 1.29 = 6.2$
    //  6.2$  = x€ = 6.2 * 1.29 / 1 = 8€
    //  8€    = x£ = 8 * 1 / 0.8 = 10£

    this.currencies = []  // ['€', '$' , '£']
    this.rates = [];      // [1  , 1.29, 0.8]

    this.$get = function () {
      var self = this;
      return {
        convert : function (value, from, to) {
          return (value * self.rates[self.currencies.indexOf(to)]) / self.rates[self.currencies.indexOf(from)];
        }
      };
    };
  }]);