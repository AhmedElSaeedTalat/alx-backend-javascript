const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200);
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = app;
