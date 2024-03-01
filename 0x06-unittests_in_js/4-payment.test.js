const utils = require('./utils.js')
const sendPaymentRequestToApi = require('./3-payment.js'); 
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;


describe('sendPaymentRequestToApi', () => {
  it('check sinon.spy for utils.calculateNumber', () => {
    const calculateNumberStub = sinon.stub(utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    const num = 10;	
    const message = `The total is: ${num}`;
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(spy.calledWith(message)).to.be.true;
    calculateNumberStub.restore();
  });
});
