import { ErrorMessages } from '../../../utils/errors';
import { rooms } from '../../room';
import { Ship } from '../../ship/model/ship';

export class Game {
  gameId: number;
  roomId: number;
  playerOneId: number | null;
  playerTwoId: number | null;
  playerOneShips: Ship[] = [];
  playerTwoShips: Ship[] = [];

  constructor(roomId: number) {
    this.roomId = roomId;
    this.init();
  }

  init() {
    const ids = rooms.findOne(this.roomId)?.getPlayerIDs();
    if (ids) {
      this.playerOneId = ids.playerOneId;
      this.playerTwoId = ids.playerTwoId;
      this.gameId = Date.now();
    } else {
      console.error(ErrorMessages.playersNotFound);
    }
  }

  canStart() {
    return this.playerOneShips.length > 0 && this.playerTwoShips.length > 0;
  }

  setShips(playerId: number, ships: Ship[]) {
    if (playerId === this.playerOneId) {
      this.playerOneShips = ships;
    } else if (playerId === this.playerTwoId) {
      this.playerTwoShips = ships;
    } else {
      console.log(ErrorMessages.playerNotFound);
    }
  }

  toString(): string {
    let result =
      `Game ID: ${this.gameId}\n` +
      `Room ID: ${this.roomId}\n` +
      `Player One ID: ${this.playerOneId}, Active Ships: ${this.playerOneShips.length}\n` +
      `Player Two ID: ${this.playerTwoId}, Active Ships: ${this.playerTwoShips.length}\n`;

    result += 'Player One Ships:\n';
    this.playerOneShips.forEach((ship) => {
      result += ship.toString() + '\n';
    });

    result += 'Player Two Ships:\n';
    this.playerTwoShips.forEach((ship) => {
      result += ship.toString() + '\n';
    });
    return result;
  }
  getShips(playerId: number) {
    if (playerId === this.playerOneId) {
      return this.playerOneShips;
    } else if (playerId === this.playerTwoId) {
      return this.playerTwoShips;
    } else {
      console.log(ErrorMessages.playerNotFound);
      return [];
    }
  }
}
