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
}

export type MessageData =
  | RequestRegData
  | ResponseRegData
  | AddShipsData
  | AttackData
  | AddUserToRoomData
  | CreateGameData
  | FinishData
  | RandomAttackData
  | StartGameData
  | TurnData
  | UpdateRoomData
  | ResponseUpdateWinnersData;

export interface RequestRegData {
  name: string;
  password: string;
}
export interface ResponseRegData {
  name: string;
  password: string;
  error: boolean;
  errorText: string;
}

export interface AddShipsData {}

export interface AttackData {}

export interface AddUserToRoomData {}

export interface CreateGameData {}

export type CreateRoomData = string;

export interface FinishData {}

export interface RandomAttackData {}

export interface StartGameData {}

export interface TurnData {}

export interface UpdateRoomData {}

export interface ResponseUpdateWinnersData {
  winners: Winner[];
}

export interface Winner {
  name: string;
  wins: number;
}
