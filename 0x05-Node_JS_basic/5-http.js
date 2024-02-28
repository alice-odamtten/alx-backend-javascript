/**
 * a simple http server
 */

const http = require('http');

const url = require("url");

const path = process.argv
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  
  const reqUrl = url.parse(req.url).pathname
  if(reqUrl == "/") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  }
  else if (reqUrl == "/students"){
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", path[2]);
    res.write("This is the list of our students");
    res.end(countStudents(path[2]);)
});

app.listen(1245, () => {});

module.exports = app;
