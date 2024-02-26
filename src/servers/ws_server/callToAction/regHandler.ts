import { User, users } from '../../../entities/user';
import { wsClients } from '../../../entities/websocketsDB';
import {
  Message,
  MessageTypesWS,
  RegDataRequest,
  RegDataResponse,
  WebSocketWithId,
} from '../../../types';

import { serverAnswer, updateRoom, updateWinners } from './serverAnswer';

export const regUserHandler = (message: Message, wsClient: WebSocketWithId) => {
  const name = (message.data as RegDataRequest).name;
  const password = (message.data as RegDataRequest).password;
  const newUser: User | undefined = users.create(name, password);
  if (!newUser) return;
  wsClient.id = newUser.id;
  wsClients.push(wsClient);
  regResponse(wsClient, newUser);
  updateRoom();
  updateWinners();
};

const regResponse = (wsClient: WebSocketWithId, user: User) => {
  const responseType: MessageTypesWS = MessageTypesWS.reg;
  const payloadData: RegDataResponse = {
    name: user.name,
    index: user.id,
    error: false,
    errorText: '',
  };
  const result = JSON.stringify(serverAnswer(payloadData, responseType));
  wsClient.send(result);
};
