import { WebSocket } from 'ws';

import { webSocketServer } from '../../../../index';
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

export const updateRoom = () => {
  const roomsData = rooms.getAll();
  const result = serverAnswer(roomsData, MessageTypesWS.update_room);
  sendResponseAllClients(result);
};

export const updateWinners = () => {
  const winners: UpdateWinnersDataResponse = users.getWinners();
  const result = serverAnswer(winners, MessageTypesWS.update_winners);
  sendResponseAllClients(result);
};

export const sendResponseAllClients = (data: Message) => {
  webSocketServer.clients.forEach((client: WebSocket) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};
