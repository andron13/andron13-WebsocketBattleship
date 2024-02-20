import * as ws from 'ws';

import { WebSocketWithId } from '../../types';
import { ErrorMessages } from '../../utils/errors';
import { toParseData } from '../../utils/parsedData';

import { handleData } from './hadleDataSwitch';

export const onConnect = (wsClient: WebSocketWithId) => {
  wsClient.on('message', (data: ws.RawData) => {
    const parsedData = toParseData(data);
    handleData(parsedData, wsClient);
  });

  wsClient.on('close', () => {
    console.log(ErrorMessages.wsClientClose);
  });

  wsClient.on('error', () => {
    console.log(ErrorMessages.wsClientError);
  });
};
