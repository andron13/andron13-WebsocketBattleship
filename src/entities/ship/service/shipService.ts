import { Position } from '../../../types';
import { games } from '../../game/service/gameService';

export const attackShip = (gameID, position, indexPlayer) => {
  const game = games.findOne(gameID);
  if (!game) return;
};

export const positionsAreEqual = (pos1: Position, pos2: Position): boolean => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};
