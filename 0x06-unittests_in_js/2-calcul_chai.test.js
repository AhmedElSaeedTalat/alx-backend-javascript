const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require("./1-calcul.js");

describe ('test suit', () => {
  it('test add method normal test', () => {
    expect(calculateNumber('SUM', 2.0, 3.0)).to.be.equal(5);
  });


  it('test add method floats', () => {
    expect(calculateNumber('SUM', 2.1, 2,2)).to.be.equal(4);
  });

  it('test add method missing argument', () => {
    expect(calculateNumber('SUM', 3)).to.be.NaN;
  });

  it('test add floats with one rounded', () => {
    expect(calculateNumber('SUM', 2.9, 2)).to.be.equal(5);
  });

  it('test add floats with 2 rounded', () => {
    expect(calculateNumber('SUM', 2.9, 2.9)).to.be.equal(6);
  });

  it('test add floats with one rounded', () => {
    expect(calculateNumber('SUM', 2, 3.8)).to.be.equal(6);
  });

  it('test add floats with 2 rounded 2 fraction', () => {
    expect(calculateNumber('SUM', 2.99, 2.33)).to.be.equal(5);
  });

  it('test add floats with more the fraction', () => {
    expect(calculateNumber('SUM', 2.9999999, 3.109323)).to.be.equal(6);
  });

  // subtract tests
  it('test subtract method normal test', () => {
    expect(calculateNumber('SUBTRACT', 3.0, 2.0)).to.be.equal(1);
  });


  it('test SUBTRACT method floats', () => {
    expect(calculateNumber('SUBTRACT', 2.2, 2,1)).to.be.equal(0);
  });

  it('test SUBTRACT method missing argument', () => {
    expect(calculateNumber('SUBTRACT', 3)).to.be.NaN;
  });

  it('test SUBTRACT floats with one rounded', () => {
    expect(calculateNumber('SUBTRACT', 2.9, 2)).to.be.equal(1);
  });

  it('test add floats with 2 rounded', () => {
    expect(calculateNumber('SUBTRACT', 2.9, 2.9)).to.be.equal(0);
  });

  it('test add floats with one rounded', () => {
    expect(calculateNumber('SUBTRACT', 3.8, 2)).to.be.equal(2);
  });

  it('test add floats with 2 rounded 2 fraction', () => {
    expect(calculateNumber('SUBTRACT', 2.99, 2.33)).to.be.equal(1);
  });

  it('test add floats with more the fraction', () => {
    expect(calculateNumber('SUBTRACT', 3.109323, 2.9999999)).to.be.equal(0);
  });

  it('test add floats with no type', () => {
    expect(calculateNumber(3.109323, 2.9999999)).to.be.equal(undefined);
  });

  // DIVIDE tests

  it('test DIVIDE method b == 0', () => {
    expect(calculateNumber('DIVIDE', 3.0, 0)).to.be.equal('Error');
  });

  it('test DIVIDE method normal test', () => {
    expect(calculateNumber('DIVIDE', 6.0, 2.0)).to.be.equal(3);
  });


  it('test DIVIDE method floats', () => {
    expect(calculateNumber('DIVIDE', 6.2, 3,1)).to.be.equal(2);
  });

  it('test DIVIDE method missing argument', () => {
    expect(calculateNumber('DIVIDE', 3)).to.be.NaN;
  });

  it('test DIVIDE floats with one rounded', () => {
    expect(calculateNumber('DIVIDE', 7.9, 2)).to.be.equal(4);
  });

  it('test DIVIDE floats with 2 rounded', () => {
    expect(calculateNumber('DIVIDE', 2.9, 2.9)).to.be.equal(1);
  });

  it('test DIVIDE floats with one rounded', () => {
    expect(calculateNumber('DIVIDE', 8.8, 3)).to.be.equal(3);
  });

  it('test DIVIDE floats with 2 rounded 2 fraction', () => {
    expect(calculateNumber('DIVIDE', 3.33, 2.99)).to.be.equal(1);
  });

  it('test DIVIDE floats with more the fraction', () => {
    expect(calculateNumber('DIVIDE', 3.109323, 2.9999999)).to.be.equal(1);
  });

  it('test DIVIDE floats with no type', () => {
    expect(calculateNumber(3.109323, 2.9999999)).to.be.equal(undefined);
  });
});
