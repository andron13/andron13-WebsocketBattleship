import { Message, WebSocketWithId } from '../../../types';

export const singlePlay = (message: Message, wsClient: WebSocketWithId) => {
  console.log(message);
};
