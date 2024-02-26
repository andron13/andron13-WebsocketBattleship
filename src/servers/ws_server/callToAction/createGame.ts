import { webSocketServer } from '../../../../index';
import { Game } from '../../../entities/game/model/game';
import { games } from '../../../entities/game/service/gameService';
import {
  CreateGameDataResponse,
  MessageTypesWS,
  WebSocketWithId,
} from '../../../types';

import { serverAnswer } from './serverAnswer';

export const createGame = (roomID: number) => {
  webSocketServer.clients.forEach((client: WebSocketWithId) => {
    client.send(createGameResponse(roomID, client.id));
  });
};

const createGameResponse = (roomID: number, wsID: number) => {
  const game: Game = games.create(roomID);
  const responseType: MessageTypesWS = MessageTypesWS.create_game;
  const payloadData: CreateGameDataResponse = {
    idPlayer: wsID,
    idGame: game.gameId,
  };
  return JSON.stringify(serverAnswer(payloadData, responseType));
};
