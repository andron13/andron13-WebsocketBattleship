import { WebSocketServer } from 'ws';

import { httpServer } from './src/servers/http_server';
import { onConnect } from './src/servers/ws_server/webSocketHandler';

const HTTP_PORT = 8181;
const WS_PORT = 3000;

console.log(`Starting static http server on http://localhost:${HTTP_PORT}`);
httpServer.listen(HTTP_PORT);

export const ws = new WebSocketServer({ port: WS_PORT }, () => {
  console.log(`Starting websocket server on  ws://localhost:${WS_PORT}`);
});
ws.on('connection', onConnect);
