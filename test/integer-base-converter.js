/*jshint node:true, mocha:true */

'use strict';

require('should');

var other = require('integer-base-converter');
var fn = require('../src/');

describe('integer-base-converter', function() {
  it('yields the same results for base 60', function() {
    var b10To60 = fn(60);

    'Ge'
      .should.be.exactly(other.convert(1000, 10, 60))
      .and.exactly(b10To60(1000));

    'Gf'
      .should.be.exactly(other.convert(1001, 10, 60))
      .and.exactly(b10To60(1001));
  });

  it.skip('yields the same results for base 62', function() {
    var b10To62 = fn(62);

    'z'
      .should.be.exactly(other.convert(61, 10, 62).toString())
      .and.exactly(b10To62(61));
  });
});
