export enum ErrorMessages {
  wsClientError = 'A problem has been encountered with the WebSocket client.',
  wsClientDisconnection = 'The WebSocket client has unexpectedly disconnected.',
  roomNotFound = 'Room not found.',
  existingUserInRoom = 'A user with the same name already exists in the room.',
  playersNotFound = 'No players were found',
  roomLimitPerPlayer = 'A single player can only create one room',
}
