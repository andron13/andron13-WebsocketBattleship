import * as ws from 'ws';

import { users } from '../../entities/user';
import { Message, RequestRegData } from '../../types';
import { MessageTypesWS } from '../../utils/allCommandList';
import { parseData } from '../../utils/parsedData';

export const onConnect = (wsClient: ws.WebSocket) => {
  wsClient.on('message', (data: ws.RawData) => {
    const parsedData = parseData(data);
    handleData(parsedData);
  });

  wsClient.on('close', () => {
    console.log(`wsClient.on close Client disconnected.`);
  });
};

function handleData(message: Message) {
  console.log(handleData);
  console.log({ message });
  switch (message.type) {
    case MessageTypesWS.reg:
      console.log('reg.', message.type);
      const name = (message.data as RequestRegData).name;
      const password = (message.data as RequestRegData).password;
      users.create(name, password);
      break;
    default:
      console.log('default', message.type);
      break;
  }
}
