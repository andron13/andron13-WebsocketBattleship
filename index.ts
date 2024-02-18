import { WebSocketServer } from 'ws';

import { httpServer, onConnect } from './src/servers';
import { HTTP_PORT, WS_PORT } from './src/utils/config';

console.log(`Starting static http server on http://localhost:${HTTP_PORT}`);
httpServer.listen(HTTP_PORT);

export const ws = new WebSocketServer({ port: WS_PORT }, () => {
  console.log(`Starting websocket server on  ws://localhost:${WS_PORT}`);
});
ws.on('connection', onConnect);
