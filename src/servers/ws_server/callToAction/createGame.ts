//{
//     type: "create_game", //send for both players in the room
//     data:
//         {
//             idGame: <number>,
//             idPlayer: <number>, \* id for player in the game session, who have sent add_user_to_room request, not enemy *\
//         },
//     id: 0,
// }
// 1. create_game
// 2. add_ships
// 3. start_game

import {
  CreateGameDataResponse,
  MessageTypesWS,
  RegDataResponse,
  WebSocketWithId,
} from '../../../types';

import { serverAnswer } from './serverAnswer';

export const createGame = (roomID) => {
  console.log('createGame');
  // 1. послать сооб
};

export const startGame = (roomID) => {
  console.log('startGame');
};

const createGameResponse = (wsClient: WebSocketWithId) => {
  const responseType: MessageTypesWS = MessageTypesWS.create_game;
  const payloadData: CreateGameDataResponse = {
    idPlayer: 0,
    idGame: 0,
  };
  const result = JSON.stringify(serverAnswer(payloadData, responseType));
  wsClient.send(result);
};
