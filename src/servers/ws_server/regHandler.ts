import * as ws from 'ws';

import { rooms } from '../../entities/room';
import { User, users } from '../../entities/user';
import {
  Message,
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
  console.log('regResponse');
  // <-- update_room
  updateRoom(wsClient);
  console.log('updateRoom');
  // <--   update_winners
  updateWinners(wsClient);
  console.log('updateWinners');
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
const updateRoom = (wsClient: ws) => {
  const roomsData = rooms.getAll();
  const result = serverAnswer(roomsData, MessageTypesWS.update_room);
  console.log(result);
  wsClient.send(JSON.stringify(result));
};
const updateWinners = (wsClient: ws) => {
  const winners: UpdateWinnersDataResponse = users.getWinners();
  const result = serverAnswer(winners, MessageTypesWS.update_winners);
  console.log(result);
  wsClient.send(JSON.stringify(result));
};

const serverAnswer = (payloadData, type: MessageTypesWS): Message => {
  return {
    type: type,
    data: JSON.stringify(payloadData),
    id: 0,
  };
};
