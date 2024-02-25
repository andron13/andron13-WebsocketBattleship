import { AttackDataRequest, Message, WebSocketWithId } from '../../../types';

export const attack = (message: Message, wsClient: WebSocketWithId) => {
  console.log(message);
  const messageData: AttackDataRequest = message.data as AttackDataRequest;
  const position = { x: messageData.x, y: messageData.y };
};

export const randomAttack = (message: Message, wsClient: WebSocketWithId) => {
  console.log(message);
};
