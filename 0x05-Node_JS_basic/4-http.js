const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
module.exports = http;
