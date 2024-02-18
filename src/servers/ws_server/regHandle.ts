import { User, users } from '../../entities/user';
import { Message, RegDataRequest, RegDataResponse } from '../../types';

export const createUserAndSendResponse = (message: Message, wsClient) => {
  const name = (message.data as RegDataRequest).name;
  const password = (message.data as RegDataRequest).password;
  const newUser: User = users.create(name, password);
  // sendDataBack
  sendMessageBack(wsClient, newUser);
};

const sendMessageBack = (wsClient, user: User) => {
  const payloadData: RegDataResponse = {
    name: user.name,
    index: user.id,
    error: false,
    errorText: 'string',
  };

  const result = {
    type: 'reg',
    data: payloadData,
    id: 0,
  };
  wsClient.send(JSON.stringify(result));
};
