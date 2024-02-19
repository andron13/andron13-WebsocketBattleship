import * as ws from 'ws';

import { rooms } from '../../../entities/room';
import { users } from '../../../entities/user';
import {
  Message,
  MessageTypesWS,
  UpdateWinnersDataResponse,
} from '../../../types';

export const serverAnswer = (payloadData, type: MessageTypesWS): Message => {
  return {
    type: type,
    data: JSON.stringify(payloadData),
    id: 0,
  };
};

export const updateRoom = (wsClient: ws) => {
  const roomsData = rooms.getAll();
  const result = serverAnswer(roomsData, MessageTypesWS.update_room);
  console.log(result);
  wsClient.send(JSON.stringify(result));
};
export const updateWinners = (wsClient: ws) => {
  const winners: UpdateWinnersDataResponse = users.getWinners();
  const result = serverAnswer(winners, MessageTypesWS.update_winners);
  console.log(result);
  wsClient.send(JSON.stringify(result));
};
