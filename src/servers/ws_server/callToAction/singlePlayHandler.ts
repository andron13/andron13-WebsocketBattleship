import * as ws from 'ws';

import { Message } from '../../../types';

export const singlePlay = (message: Message, wsClient: ws) => {
  console.log(message);
};
