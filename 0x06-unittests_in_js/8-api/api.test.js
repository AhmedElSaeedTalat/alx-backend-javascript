const request = require('request');
const chai = require('chai');
const expect = chai.expect;


const url = 'http://localhost:7865/';
describe('one suite', () => {
  it('test app', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      const msg = 'Welcome to the payment system';
      expect(body).to.be.equal(msg);
      done();
    });
  });
});
