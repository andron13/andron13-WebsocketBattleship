import { Message, MessageTypesWS, WebSocketWithId } from '../../types';

import {
  addShips,
  addUserToRoom,
  createRoom,
  regUserHandler,
  singlePlay,
} from './callToAction';
import { getAttack, randomAttack } from './callToAction/attackHandler';

export const handleData = (message: Message, wsClient: WebSocketWithId) => {
  switch (message.type) {
    case MessageTypesWS.reg:
      regUserHandler(message, wsClient); //done
      break;
    case MessageTypesWS.create_room:
      createRoom(wsClient); // done
      break;
    case MessageTypesWS.add_user_to_room:
      addUserToRoom(message, wsClient); // done
      break;
    case MessageTypesWS.add_ships:
      addShips(message, wsClient); // done
      break;
    case MessageTypesWS.attack: //
      getAttack(message, wsClient);
      break;
    case MessageTypesWS.randomAttack: //(shoot, kill, miss)
      randomAttack(message, wsClient);
      break;
    case MessageTypesWS.singlePlay:
      singlePlay(message, wsClient);
      break;
    default:
      console.log('default', message.type);
      break;
  }
};
