const utils = require('./utils.js')
const sendPaymentRequestToApi = require('./3-payment.js'); 
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
describe('sendPaymentRequestToApi', () => {
  it('check sinon.spy for utils.calculateNumber', () => {
    const spy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
