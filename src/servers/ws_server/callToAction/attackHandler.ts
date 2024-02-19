import * as ws from 'ws';

import { Message } from '../../../types';

export const attack = (message: Message, wsClient: ws) => {
  console.log(message);
};

export const randomAttack = (message: Message, wsClient: ws) => {
  console.log(message);
};
