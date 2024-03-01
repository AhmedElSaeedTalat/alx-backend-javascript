const utils = require('./utils.js');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}
module.exports = sendPaymentRequestToApi;
