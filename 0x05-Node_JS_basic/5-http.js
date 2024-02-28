/**
 * a simple http server
 */

const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (url.pathname === '/students') {
    const dbName = process.argv[2];
    countStudents(dbName)
      .then(() => {
        res.write('This is the list of our students\n');
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Invalid endpoint\n');
  }
});

app.listen(1245, () => {});

module.exports = app;
