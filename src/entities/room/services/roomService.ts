import { ErrorMessages } from '../../../utils/errors';
import { Room } from '../model/room';

class RoomService {
  private static instance: RoomService;
  private rooms: Room[] = [];

  private constructor() {}

  static getInstance(): RoomService {
    if (!this.instance) {
      this.instance = new RoomService();
    }
    return this.instance;
  }

  create(playerID: number) {
    if (this.findOneByOwnerID(playerID)) {
      console.log(ErrorMessages.roomLimitPerPlayer);
      return undefined;
    }
    const newRoom: Room = new Room(playerID);
    this.rooms.push(newRoom);
    return newRoom;
  }

  delete(roomId: number): void {
    this.rooms = this.rooms.filter((room) => room.roomId !== roomId);
  }

  findOneByOwnerID(playerID: number): Room | undefined {
    return this.rooms.find((room): boolean => room.roomOwner === playerID);
  }
  findOne(roomId: number): Room | undefined {
    return this.rooms.find((room): boolean => room.roomId === roomId);
  }

  getAll() {
    return this.rooms;
  }

  /**
   * Adds a new user to a specified room.
   *
   * @param {number} roomId - The ID of the room where the new user is to be added.
   * @param {string} username - The username of the new user to be added.
   * @param {number} userIndex - The index position where the new user is to be added in the
   *                              room's user list.
   *
   * @returns {void}
   *
   * @throws {Error} Will throw an error if the specified room does not exist.
   */
  addNewUserToRoom(roomId: number, username: string, userIndex: number): void {
    const room = this.findOne(roomId);
    if (room) {
      room.setRoomUsers(username, userIndex);
    } else {
      console.error(ErrorMessages.roomNotFound);
    }
  }
}

export const rooms: RoomService = RoomService.getInstance();
