/*jshint node:true */

'use strict';

var posNotation = require('positional-notation');
var toBigFactory = require('to-decimal-arbitrary-precision');

var R = require('./R');
var U = require('./U');
var translate = require('./translate');
// var fracUnfolder = require('./fracUnfolder');

var defaultBig = toBigFactory(require('./Big'));
var defaultSymbols = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

var fromDecimalRaw = R.curryN(4, function(big, symbols, base, n) {
  return R.pipe(
    U.toString,
    translate(defaultSymbols, symbols),
    U.splitByDot,
    R.adjust(R.unfold(posNotation.unfolder(big, base)), 0),
    // R.adjust(fracUnfolder(posNotation.unfolder(big, base)), 1),
    R.adjust(R.reverse, 0),
    R.map(R.map(U.nthSymbol(symbols))),
    R.adjust(U.joinWithoutSep, 0),
    U.joinWithDot
  )(n);
});


var fromDecimal = fromDecimalRaw(defaultBig, defaultSymbols);

fromDecimal.big = fromDecimalRaw(R.__, defaultSymbols);
fromDecimal.symbols = fromDecimalRaw(defaultBig);
fromDecimal.raw = fromDecimalRaw;

fromDecimal.defaultSymbols = defaultSymbols;
fromDecimal.defaultBig = defaultBig;
fromDecimal.__ = R.__;

module.exports = fromDecimal;
