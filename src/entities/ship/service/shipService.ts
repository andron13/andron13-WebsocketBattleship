import { games } from '../../game/service/gameService';
import { Cell, Position } from '../model/ship';

export const attack = (gameID, position, indexPlayer) => {
  const game = games.findOne(gameID);
  if (!game) return;
  const ships = game.getShips(indexPlayer);
  const shipsCells: Cell[] = ships.flatMap((ship) => ship.cells);
  if (shipsCells.some((e) => positionsAreEqual(e.position, position))) {
  } else {
    return;
  }
};

export const positionsAreEqual = (pos1: Position, pos2: Position): boolean => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};
