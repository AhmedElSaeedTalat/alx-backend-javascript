const express = require('express');
const app = express();
const PORT = 7865;


app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;
