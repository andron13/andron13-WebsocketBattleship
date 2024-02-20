import { rooms } from '../../../entities/room';
import { users } from '../../../entities/user';
import { Message, WebSocketWithId } from '../../../types';

import { updateRoom } from './serverAnswer';

export const addUserToRoom = (message: Message, wsClient: WebSocketWithId) => {
  const roomID = message.data['indexRoom'];
  const user = users.findOne(wsClient.id);
  if (user) {
    rooms.addNewUserToRoom(roomID, user.name, user.id);
  }
  updateRoom();
};
