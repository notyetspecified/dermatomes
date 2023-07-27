#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  let filePath = path.join(
    __dirname,
    'src',
    request.url === '/' ? 'index.html' : request.url
  );
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'src', '404.html'),
          (error, content) => {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
          }
        );
      } else {
        // Some server error
        response.writeHead(500);
        response.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
});

server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});
