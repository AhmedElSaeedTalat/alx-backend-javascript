const calculateNumber = require("./1-calcul.js");

const assert = require('assert');

describe ('test suit', () => {
  it('test add method normal test', () => {
    assert.strictEqual(calculateNumber('SUM', 2.0, 3.0), 5);
  });


  it('test add method floats', () => {
    assert.strictEqual(calculateNumber('SUM', 2.1, 2,2), 4);
  });

  it('test add method missing argument', () => {
    assert.ok(isNaN(calculateNumber('SUM', 3)));
  });

  it('test add floats with one rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 2.9, 2), 5);
  });

  it('test add floats with 2 rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 2.9, 2.9), 6);
  });

  it('test add floats with one rounded', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 3.8), 6);
  });

  it('test add floats with 2 rounded 2 fraction', () => {
    assert.strictEqual(calculateNumber('SUM', 2.99, 2.33), 5);
  });

  it('test add floats with more the fraction', () => {
    assert.strictEqual(calculateNumber('SUM', 2.9999999, 3.109323), 6);
  });

  // subtract tests
  it('test subtract method normal test', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 2.0), 1);
  });


  it('test SUBTRACT method floats', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 2,1), 0);
  });

  it('test SUBTRACT method missing argument', () => {
    assert.ok(isNaN(calculateNumber('SUBTRACT', 3)));
  });

  it('test SUBTRACT floats with one rounded', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.9, 2), 1);
  });

  it('test add floats with 2 rounded', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.9, 2.9), 0);
  });

  it('test add floats with one rounded', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.8, 2), 2);
  });

  it('test add floats with 2 rounded 2 fraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.99, 2.33), 1);
  });

  it('test add floats with more the fraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.109323, 2.9999999), 0);
  });

  it('test add floats with no type', () => {
    assert.strictEqual(calculateNumber(3.109323, 2.9999999), undefined);
  });

  // DIVIDE tests

  it('test DIVIDE method b == 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.0, 0), 'Error');
  });

  it('test DIVIDE method normal test', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.0, 2.0), 3);
  });


  it('test DIVIDE method floats', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.2, 3,1), 2);
  });

  it('test DIVIDE method missing argument', () => {
    assert.ok(isNaN(calculateNumber('DIVIDE', 3)));
  });

  it('test DIVIDE floats with one rounded', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 7.9, 2), 4);
  });

  it('test DIVIDE floats with 2 rounded', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2.9, 2.9), 1);
  });

  it('test DIVIDE floats with one rounded', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.8, 3), 3);
  });

  it('test DIVIDE floats with 2 rounded 2 fraction', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.33, 2.99), 1);
  });

  it('test DIVIDE floats with more the fraction', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.109323, 2.9999999), 1);
  });

  it('test DIVIDE floats with no type', () => {
    assert.strictEqual(calculateNumber(3.109323, 2.9999999), undefined);
  });
});
