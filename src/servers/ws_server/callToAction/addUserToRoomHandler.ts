import * as ws from 'ws';

import { Message } from '../../../types';

export const addUserToRoom = (message: Message, wsClient: ws) => {
  console.log(message);
};
