const app = require('http');

app.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
module.exports = app;
