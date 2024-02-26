import { ErrorMessages } from '../../../utils/errors';
import { Ship } from '../../ship/model/ship';
import { Game } from '../model/game';

class GameService {
  private static instance: GameService;
  private games: Game[] = [];
  private constructor() {}
  static getInstance(): GameService {
    if (!this.instance) {
      this.instance = new GameService();
    }
    return this.instance;
  }
  create(roomId: number) {
    const existingGame = this.games.find((game) => game.roomId === roomId);
    if (existingGame) {
      console.log(ErrorMessages.gameExist(roomId));
      return existingGame;
    }
    const newGame: Game = new Game(roomId);
    this.games.push(newGame);
    return newGame;
  }
  findOne(gameId: number): Game | undefined {
    return this.games.find((game) => game.gameId === gameId);
  }
  getAll() {
    return this.games;
  }

  addShipsToGame(gameId: number, playerID: number, ships: Ship[]) {
    const game = this.findOne(gameId);
    game?.setShips(playerID, ships);
    return game;
  }
}

export const games: GameService = GameService.getInstance();
