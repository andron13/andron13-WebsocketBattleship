import * as ws from 'ws';

import { Message } from '../../../types';

export const addShips = (message: Message, wsClient: ws) => {
  console.log(message);
};
