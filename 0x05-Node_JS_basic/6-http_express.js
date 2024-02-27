const express = require('express');

const route = express();
const port = 1245;

const app = () => {
  route.get('/', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send('Hello Holberton School!');
  });

  route.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

app();
module.exports = app;
