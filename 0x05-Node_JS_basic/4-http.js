const app = require('http');

app.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
}).listen(1245);
module.exports = app;
