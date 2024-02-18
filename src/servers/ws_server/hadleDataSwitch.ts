import { createUser } from '../../entities/user';
import { Message, MessageTypesWS } from '../../types';

export const handleData = (message: Message) => {
  console.log({ message });
  switch (message.type) {
    case MessageTypesWS.reg:
      createUser(message);
      break;
    default:
      console.log('default', message.type);
      break;
  }
};
