import { Game } from '../../../entities/game/model/game';
import { games } from '../../../entities/game/service/gameService';
import { wsClients } from '../../../entities/websocketsDB';
import {
  AddShipsDataRequest,
  Message,
  MessageTypesWS,
  StartGameDataResponse,
  WebSocketWithId,
} from '../../../types';

import { serverAnswer } from './serverAnswer';

export const addShips = (message: Message, wsClient: WebSocketWithId) => {
  // const wsClientID = wsClient.id;
  const messageDATA = message.data as AddShipsDataRequest;
  const gameId: number = messageDATA.gameId;
  const ships = messageDATA.ships;
  const playerID: number = messageDATA.indexPlayer;
  const game = games.addShipsToGame(gameId, playerID, ships);
  if (game && game.canStart()) startGame(game);
};

export const startGame = (game: Game) => {
  const playerOneId = game.playerOneId;
  const playerTwoId = game.playerTwoId;
  const wsClientOne = wsClients.find((client) => client.id === playerOneId);
  const wsClientTwo = wsClients.find((client) => client.id === playerTwoId);
  startGameResponse(wsClientOne, game);
  startGameResponse(wsClientTwo, game);
};

const startGameResponse = (wsClient, game) => {
  const responseType: MessageTypesWS = MessageTypesWS.start_game;
  const ships = game.getShips(wsClient.id);
  const payloadData: StartGameDataResponse = {
    ships: ships,
    currentPlayerIndex: wsClient.id,
  };
  const result = JSON.stringify(serverAnswer(payloadData, responseType));
  wsClient.send(result);
};
