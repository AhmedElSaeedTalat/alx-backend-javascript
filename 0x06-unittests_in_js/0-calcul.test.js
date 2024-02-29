const calculateNumber = require("./0-calcul.js");

const assert = require('assert');

describe ('test suit', () => {
  it('test add method normal test', () => {
    const result = calculateNumber(2, 3);
    assert.strictEqual(result, 5);
  });


  it('test add method floats', () => {
    const result = calculateNumber(2.0, 3.0);
    assert.strictEqual(result, 5);
  });

  it('test add method missing argument', () => {
    const result = calculateNumber(2);
    assert.ok(isNaN(result));
  });

  it('test add floats with one rounded', () => {
    const result = calculateNumber(2.8, 3);
    assert.strictEqual(result, 6);
  });

  it('test add floats with more the fraction', () => {
    const result = calculateNumber(2.8999, 3.999);
    assert.strictEqual(result, 7);
  });

});
