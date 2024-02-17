import { httpServer } from './src/http_server';

const HTTP_PORT = 8181;

console.log(`Starting static http server at http://localhost:${HTTP_PORT}`);
httpServer.listen(HTTP_PORT);
