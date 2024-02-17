import fs from 'fs';
import http from 'http';
import path from 'path';

export const httpServer = http.createServer(function (req, res) {
  const finalUri = req.url === '/' ? 'index.html' : `${req.url}`;
  const getRoot = path.resolve(path.dirname(''));
  const filePath = path.join(getRoot, 'front', finalUri);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});
