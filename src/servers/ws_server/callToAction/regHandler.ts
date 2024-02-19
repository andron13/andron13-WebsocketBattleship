import * as ws from 'ws';

import { User, users } from '../../../entities/user';
import {
  Message,
  MessageTypesWS,
  RegDataRequest,
  RegDataResponse,
} from '../../../types';

import { serverAnswer, updateRoom, updateWinners } from './serverAnswer';

export const regUserHandler = (message: Message, wsClient: ws) => {
  const name = (message.data as RegDataRequest).name;
  const password = (message.data as RegDataRequest).password;
  const newUser: User = users.create(name, password);
  // <-- sendDataBack RegDataResponse
  regResponse(wsClient, newUser);
  // console.log('regResponse');
  // <-- update_room
  updateRoom(wsClient);
  // console.log('updateRoom');
  // <--   update_winners
  updateWinners(wsClient);
  // console.log('updateWinners');
};

const regResponse = (wsClient: ws, user: User) => {
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
