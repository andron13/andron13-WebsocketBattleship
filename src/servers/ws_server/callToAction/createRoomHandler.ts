import * as ws from 'ws';

import { Message } from '../../../types';

export const createRoom = (message: Message, wsClient: ws) => {
  console.log(message);
};
