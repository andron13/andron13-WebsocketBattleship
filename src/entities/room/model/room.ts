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

  setRoomUsers(name: string, index: number) {
    this.roomUsers.push({ name, index });
  }
}
