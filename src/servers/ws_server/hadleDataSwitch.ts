import { Message, MessageTypesWS } from '../../types';

import { createUserAndSendResponse } from './regHandle';

export const handleData = (message: Message, wsClient) => {
  // console.log({ message });
  switch (message.type) {
    case MessageTypesWS.reg:
      createUserAndSendResponse(message, wsClient);
      break;
    default:
      console.log('default', message.type);
      break;
  }
};
