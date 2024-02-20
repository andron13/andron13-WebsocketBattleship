import { User, users } from '../../../entities/user';
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
  const newUser: User = users.create(name, password);
  wsClient.id = newUser.id;
  // console.log('wsClient.id', wsClient.id);
  // console.log('newUser.id', newUser.id);
  // <-- sendDataBack RegDataResponse
  regResponse(wsClient, newUser);
  // <-- update_room
  updateRoom();
  // <--   update_winners
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
