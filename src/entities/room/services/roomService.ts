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

  create() {
    const newRoom: Room = new Room();
    this.rooms.push(newRoom);
    return newRoom;
  }

  delete(roomId: number): void {
    this.rooms = this.rooms.filter((room) => room.roomId !== roomId);
  }

  findOne(roomId: number): Room | undefined {
    return this.rooms.find((room): boolean => room.roomId === roomId);
  }

  getAll() {
    return this.rooms;
  }

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
