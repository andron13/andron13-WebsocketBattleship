import { attackShip } from '../../../entities/ship/service/shipService';
import {
  AttackDataRequest,
  Message,
  Position,
  WebSocketWithId,
} from '../../../types';

export const getAttack = (message: Message, wsClient: WebSocketWithId) => {
  console.log(message);
  const [gameID, position, indexPlayer] = getAttackData(message);
  attackShip(gameID, position, indexPlayer);
  // Если получается атака
  // Мы выбираем из неё данные (gameID, position, indexPlayer) - done
  // Мы связываем атаку с игрой (gameID, position, indexPlayer)
  // indexPlayer тот кто стреляет.
  // игра должна определить мимо, ранен или убит
  // в заключении сервис должен определить есть ещё цели для поражения или нет у оба двух игроков
  // после атаки надо отправить ход другому участнику.
};

export const randomAttack = (message: Message, wsClient: WebSocketWithId) => {
  console.log(message);
};

const getAttackData = (message: Message): [number, Position, number] => {
  const messageData: AttackDataRequest = message.data as AttackDataRequest;
  const position: Position = { x: messageData.x, y: messageData.y };
  const gameID: number = messageData.gameId;
  const indexPlayer: number = messageData.indexPlayer;
  return [gameID, position, indexPlayer];
};
