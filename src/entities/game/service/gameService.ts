import { Game } from '../model/game';

class GameService {
  private static instance: GameService;
  private games: Game[];
  private constructor() {}
  static getInstance(): GameService {
    if (!this.instance) {
      this.instance = new GameService();
    }
    return this.instance;
  }
  create(roomId: number) {
    const newGame: Game = new Game(roomId);
    this.games.push(newGame);
    return newGame;
  }
  findOne(gameId: number): Game | undefined {
    return this.games.find((game) => (game.gameId = gameId));
  }
  getAll() {
    return this.games;
  }
}
