'use strict';

angular
  .module('demoApp')

  .config(['Current', 'Currencies', 'CurrencyExchangeProvider', function (Current, Currencies, CurrencyExchangeProvider) {

    Currencies.values = [{
      symbol: '€',
      name: 'Euro',
      rate: 1
    },
    {
      symbol: '$',
      name: 'Dollar',
      rate: 1.29
    },
    {
      symbol: '£',
      name: 'Pound',
      rate: 0.8
    }];

    CurrencyExchangeProvider.currencies= Currencies.values.map(function(currency) { return currency.symbol; });
    CurrencyExchangeProvider.rates= Currencies.values.map(function(currency) { return currency.rate; });

    Current.currency = Currencies.values[0];
  }]);