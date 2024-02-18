import * as ws from 'ws';

import { ErrorMessages } from '../../utils/errors';
import { parseData } from '../../utils/parsedData';

import { handleData } from './hadleDataSwitch';

export const onConnect = (wsClient: ws.WebSocket) => {
  wsClient.on('message', (data: ws.RawData) => {
    const parsedData = parseData(data);
    handleData(parsedData);
    console.log('Всё супер');
  });

  wsClient.on('close', () => {
    console.log(ErrorMessages.wsClientClose);
  });

  wsClient.on('error', () => {
    console.log(ErrorMessages.wsClientError);
  });
};
