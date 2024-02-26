// import * as ws from 'ws';
//
// import { Message, MessageData, MessageTypesWS } from '../../types';
//
// export const sendMessage = (
//   client: ws.WebSocket,
//   messageType: MessageTypesWS,
//   dataPayload: MessageData,
// ): void => {
//   const output: Message = {
//     type: messageType,
//     data: JSON.stringify(dataPayload),
//     id: 0,
//   };
//
//   client.send(JSON.stringify(output));
// };
