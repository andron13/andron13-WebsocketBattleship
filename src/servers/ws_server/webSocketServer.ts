import * as ws from 'ws';

import { ErrorMessages } from '../../utils/errors';
import { toParseData } from '../../utils/parsedData';

import { handleData } from './hadleDataSwitch';

export const onConnect = (wsClient: ws) => {
  wsClient.on('message', (data: ws.RawData) => {
    const parsedData = toParseData(data);
    handleData(parsedData, wsClient);
    // console.log('Всё супер');
  });

  wsClient.on('close', () => {
    console.log(ErrorMessages.wsClientClose);
  });

  wsClient.on('error', () => {
    console.log(ErrorMessages.wsClientError);
  });
};
