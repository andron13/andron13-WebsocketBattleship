import * as console from 'console';

import { ErrorMessages } from '../../../utils/errors';

export interface RoomUser {
  name: string;
  index: number;
}

export class Room {
  roomId: number;
  roomUsers: RoomUser[];

  constructor() {
    this.roomId = Date.now();
    this.roomUsers = [];
  }

  /**
   * Adds a new user to the room if the user does not already exist.
   *
   * @param {string} name - The name of the user to be added.
   * @param {number} index - The index position where the new user is to be added.
   *
   * @returns {void}
   *
   * @throws {Error} Will log an error in the console if the user already exists in the room.
   */
  setRoomUsers(name: string, index: number): void {
    for (const user of this.roomUsers) {
      if (user.name === name) {
        console.error(ErrorMessages.userAlreadyExists);
        return;
      }
    }
    this.roomUsers.push({ name, index });
  }

  getPlayerIDs() {
    const playerOneId = this.roomUsers[0] ? this.roomUsers[0].index : null;
    const playerTwoId = this.roomUsers[1] ? this.roomUsers[1].index : null;
    return { playerOneId, playerTwoId };
  }
}
