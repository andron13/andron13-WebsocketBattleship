import { Message, WebSocketWithId } from '../../../types';

export const attack = (message: Message, wsClient: WebSocketWithId) => {
  console.log(message);
};

export const randomAttack = (message: Message, wsClient: WebSocketWithId) => {
  console.log(message);
};
