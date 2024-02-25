export class ErrorMessages {
  static wsClientError = () =>
    'A problem has been encountered with the WebSocket client.';
  static wsClientDisconnection = () =>
    'The WebSocket client has unexpectedly disconnected.';
  static roomNotFound = () => 'Room not found.';
  static existingUserInRoom = () =>
    'A user with the same name already exists in the room.';
  static playersNotFound = () => 'No players were found';
  static roomLimitPerPlayer = (playerID: number) =>
    `A single player (${playerID}) can only create one room`;
}
