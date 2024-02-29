const calculateNumber = require("./0-calcul.js");

const assert = require('assert');

describe ('test suit', () => {
  it('test add method normal test', () => {
    result = calculateNumber(2, 3);
    assert.strictEqual(result, 5);
  });

  it('test add method missing argument', () => {
    result = calculateNumber(2);
    assert.ok(isNaN(result));
  });

  it('test add floats', () => {
    result = calculateNumber(2.8, 3);
    assert.strictEqual(result, 6);
  });

  it('test add floats with more the fraction', () => {
    result = calculateNumber(2.8999, 3.999);
    assert.strictEqual(result, 7);
  });

});
