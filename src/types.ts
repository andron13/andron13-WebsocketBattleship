import { WebSocket } from 'ws';

import { Ship } from './entities/ship/model/ship';

export interface WebSocketWithId extends WebSocket {
  id: number;
}
export interface Message {
  type: MessageTypesWS;
  data: MessageData;
  id: number;
}
export enum MessageTypesWS {
  add_ships = 'add_ships',
  add_user_to_room = 'add_user_to_room',
  attack = 'attack',
  create_game = 'create_game',
  create_room = 'create_room',
  finish = 'finish',
  randomAttack = 'randomAttack',
  reg = 'reg',
  start_game = 'start_game',
  turn = 'turn',
  update_room = 'update_room',
  update_winners = 'update_winners',
  singlePlay = 'single_play',
}

export type MessageData =
  | RegDataRequest
  | RegDataResponse
  | AddShipsDataRequest
  | AttackDataRequest
  | AttackDataResponse
  | AddUserToRoomDataRequest
  | CreateGameDataResponse
  | CreateRoomData
  | FinishData
  | RandomAttackDataRequest
  | StartGameDataResponse
  | TurnData
  | UpdateRoomDataResponse
  | UpdateWinnersDataResponse;

export interface RegDataRequest {
  name: string;
  password: string;
}
export interface RegDataResponse {
  name: string;
  index: number;
  error: boolean;
  errorText: string;
}

export interface AddShipsDataRequest {
  gameId: number;
  ships: Ship[];
  indexPlayer: number;
}

export interface AttackDataRequest {
  gameId: number;
  x: number;
  y: number;
  indexPlayer: number;
}

export interface AttackDataResponse {
  position: {
    x: number;
    y: number;
  };
  currentPlayer: number;
  status: 'miss' | 'killed' | 'shot';
}

export interface AddUserToRoomDataRequest {
  indexRoom: number;
}

export interface CreateGameDataResponse {
  idGame: number;
  idPlayer: number;
}

export type CreateRoomData = string;

export interface FinishData {
  winPlayer: number;
}

export interface RandomAttackDataRequest {
  gameId: number;
  indexPlayer: number;
}

export interface StartGameDataResponse {
  ships: Ship[];
  currentPlayerIndex: number;
}

export interface TurnData {
  currentPlayer: number;
}

export interface UpdateRoomDataResponse {
  type: MessageTypesWS;
  data: OnePlayerRooms[];
  id: number;
}

export type UpdateWinnersDataResponse = Winner[];

export interface Winner {
  name: string;
  wins: number;
}
export interface OnePlayerRooms {
  roomId: number;
  roomUsers: [
    {
      name: string;
      index: number;
    },
  ];
}
