const express = require('express');
const app = express();
const PORT = 7865;


app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  if (req.body) {
    const userName = req.body.userName;
  }
  res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;
