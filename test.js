var assert = require('assert');
var sqrt = require('./sqrt.js')
describe('檢測sqrt這個平方根函數', function() {
  describe('#sqrt', function() {
    it('test sqrt', function() {
      assert.equal(5.0004,sqrt(25));
    });
  });
});