const getPaymentTokenFromAPI = require('./6-payment_token.js');
const chai = require('chai');
const expect = chai.expect;
describe('suite', () => {
  it('test async function', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({data: 'Successful response from the API' });
      done();
	});
  });
});
