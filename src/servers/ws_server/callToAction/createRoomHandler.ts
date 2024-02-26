import { rooms } from '../../../entities/room';
import { MessageTypesWS } from '../../../types';

import {
  sendResponseAllClients,
  serverAnswer,
  updateRoom,
} from './serverAnswer';

export const createRoom = (wsClient) => {
  rooms.create(wsClient.id);
  const payload = rooms.getAll();
  const result = serverAnswer(payload, MessageTypesWS.update_room);
  updateRoom();
  sendResponseAllClients(result);
};
