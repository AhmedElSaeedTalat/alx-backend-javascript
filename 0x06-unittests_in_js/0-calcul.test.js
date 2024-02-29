const calculateNumber = require("./0-calcul.js");

const assert = require('assert');

describe ('test suit', () => {
  it('test add method normal test', () => {
    result = calculateNumber(2, 3);
    assert.equal(result, 5);
  });

  it('test add method number and string', () => {
    result = calculateNumber(2, 'a');
    assert.ok(isNaN(result));
  });

  it('test add method missing argument', () => {
    result = calculateNumber(2);
    assert.ok(isNaN(result));
  });

  it('test add floats', () => {
    result = calculateNumber(2.8, 3);
    assert.equal(result, 6);
  });
});
