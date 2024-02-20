import { ErrorMessages } from '../../../utils/errors';
import { rooms } from '../../room';

export class Game {
  gameId: number;
  roomId: number;
  playerOneId: number | null;
  playerTwoId: number | null;
  constructor(roomId: number) {
    this.gameId = this.roomId = roomId;
    this.init();
  }

  init() {
    const ids = rooms.findOne(this.roomId)?.getPlayerIDs();
    if (ids) {
      this.playerOneId = ids.playerOneId;
      this.playerTwoId = ids.playerTwoId;
    } else {
      console.error(ErrorMessages.playersNotFound);
    }
  }
}
