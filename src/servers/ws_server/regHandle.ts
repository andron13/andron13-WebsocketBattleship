import * as ws from 'ws';

import { User, users } from '../../entities/user';
import {
  Message,
  MessageData,
  MessageTypesWS,
  RegDataRequest,
  RegDataResponse,
  UpdateWinnersDataResponse,
} from '../../types';

export const regUserHandler = (message: Message, wsClient: ws) => {
  const name = (message.data as RegDataRequest).name;
  const password = (message.data as RegDataRequest).password;
  const newUser: User = users.create(name, password);
  // <-- sendDataBack RegDataResponse
  regResponse(wsClient, newUser);
  // <-- update_room
  updateRoom(wsClient);
  // <--   update_winners
  updateWinners(wsClient);
};

const regResponse = (wsClient: ws, user: User) => {
  const responseType: MessageTypesWS = MessageTypesWS.reg;
  const payloadData: RegDataResponse = {
    name: user.name,
    index: user.id,
    error: false,
    errorText: 'string',
  };
  const result = JSON.stringify(serverAnswer(payloadData, responseType));
  wsClient.send(result);
};
const updateRoom = (wsClient) => {
  const result = '';
  wsClient.send(JSON.stringify(result));
};
const updateWinners = (wsClient: ws) => {
  const winners: UpdateWinnersDataResponse = users.getWinners();
  const result = serverAnswer(winners, MessageTypesWS.update_winners);
  wsClient.send(JSON.stringify(result));
};

const serverAnswer = (
  payloadData: MessageData,
  type: MessageTypesWS,
): Message => {
  return {
    type: type,
    data: payloadData,
    id: 0,
  };
};
