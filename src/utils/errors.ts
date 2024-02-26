export class ErrorMessages {
  static wsClientError = () =>
    'A problem has been encountered with the WebSocket client.';
  static wsClientDisconnection = () =>
    'The WebSocket client has unexpectedly disconnected.';
  static roomNotFound = () => 'Room not found.';
  static existingUserInRoom = () =>
    'A user with the same name already exists in the room.';
  static userIsInRoom = (username: string, roomID: number) =>
    `A user with the name ${username} already exists in the room with ID ${roomID}.`;
  static playersNotFound = () => 'No players were found';
  static roomLimitPerPlayer = (playerID: number) =>
    `A single player (${playerID}) can only create one room`;
  static userWithThisNameExist = (name: string) =>
    `User (${name}) exist in db, plz choose other name`;
  static gameExist = (roomId: number) =>
    `A game already exists for room ${roomId}`;
  static playerNotFound = (playerID: number) =>
    `player (${playerID}) Not Found`;
}
