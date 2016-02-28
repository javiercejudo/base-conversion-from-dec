/*jshint node:true */

'use strict';

var R = require('./R');

module.exports = Object.freeze({
  indexOfSymbol: R.memoize(function(symbols) {
    return R.memoize(R.indexOf(R.__, symbols));
  }),

  joinWithoutSep: R.join(''),
  joinWithDot: R.join('.'),

  nthSymbol: R.memoize(function(symbols) {
    return R.memoize(R.nth(R.__, symbols));
  }),

  splitByDot: R.split('.'),

  toString: R.invoker(0, 'toString')
});
