const utils = require('./utils.js')
const sendPaymentRequestToApi = require('./5-payment.js');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;


describe('true suit', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log'); 
  });

  afterEach(() => {
    spy.restore();
  });

  it('confirm correct logging', () => {
    sendPaymentRequestToApi(100, 20);
    const num = 120;
    const message = `The total is: ${num}`;
    expect(spy.calledOnce).to.be.true;
  });

  it('confirm logging', () => { 
    sendPaymentRequestToApi(10, 10);
    const num = 20;
    const message = `The total is: ${num}`;
    expect(spy.calledOnce).to.be.true;
  });
});
