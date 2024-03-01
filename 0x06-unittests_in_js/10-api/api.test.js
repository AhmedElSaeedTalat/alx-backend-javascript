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

  it('test app', (done) => {
    const uri = 'http://localhost:7865/cart/12';	
    request.get(uri, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      const msg = 'Payment methods for cart 12';
      expect(body).to.be.equal(msg);
      done();
    });
  });

  it('test app', (done) => {
    const uri = 'http://localhost:7865/cart/hello';	
    request.get(uri, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  
	it('test app', (done) => {
    const uri = 'http://localhost:7865/login';	
    request.post(uri, {json: {userName: 'Ahmed'}} ,(err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Ahmed');
      done();
    });
  });
});
