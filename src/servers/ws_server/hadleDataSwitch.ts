import * as ws from 'ws';

import { Message, MessageTypesWS } from '../../types';

import { regUserHandler } from './regHandle';

export const handleData = (message: Message, wsClient: ws) => {
  switch (message.type) {
    case MessageTypesWS.reg:
      regUserHandler(message, wsClient);
      break;
    default:
      console.log('default', message.type);
      break;
  }
};
