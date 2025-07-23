const http = require('http');
const fs = require('fs');
const path = require('path');

// Get your local IP address (you'll enter it manually below)
const hostname = '0.0.0.0'; // binds to all network interfaces
const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
