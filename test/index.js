import * as sqsResource from '../src/index';
require('chai').should();

describe('syntax', () => {
  it('conforms to standard', function () {
    this.timeout = 10000;
    require('mocha-standard/semistandard');
  });
});

describe('all methods are available', () => {
  [
    'init',
    'upload',
    'getObject'
  ].forEach(method => {
    it(`${method} is available`, () => {
      sqsResource[method].should.be.function;
    });
  });
});

