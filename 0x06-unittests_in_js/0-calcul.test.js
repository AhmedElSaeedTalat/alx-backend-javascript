const calculateNumber = require("./0-calcul.js");

const assert = require('assert');

describe ('test suit', () => {
  it('test add method normal test', () => {
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
  });


  it('test add method floats', () => {
    assert.strictEqual(calculateNumber(2.1, 2,2), 4);
  });

  it('test add method missing argument', () => {
    assert.ok(isNaN(calculateNumber(3)));
  });

  it('test add floats with one rounded', () => {
    assert.strictEqual(calculateNumber(2.9, 2), 5);
  });

  it('test add floats with 2 rounded', () => {
    assert.strictEqual(calculateNumber(2.9, 2.9), 6);
  });

  it('test add floats with one rounded', () => {
    assert.strictEqual(calculateNumber(2, 3.8), 6);
  });

  it('test add floats with 2 rounded 2 fraction', () => {
    assert.strictEqual(calculateNumber(2.99, 2.33), 5);
  });

  it('test add floats with more the fraction', () => {
    assert.strictEqual(calculateNumber(2.9999999, 3.109323), 6);
  });
});
