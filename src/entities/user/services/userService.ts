import { Message, RegDataRequest } from '../../../types';
import { User } from '../model/user';

class UserService {
  private static instance: UserService;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): UserService {
    if (!this.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }

  create(name: string, password: string): User {
    const newUser = new User(name, password);
    this.users.push(newUser);
    return newUser;
  }

  findOne(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  delete(id: string): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.id !== id);
    return this.users.length < initialLength;
  }

  getAll(): User[] {
    return this.users;
  }
}

export const users = UserService.getInstance();

export const createUser = (message: Message) => {
  const name = (message.data as RegDataRequest).name;
  const password = (message.data as RegDataRequest).password;
  const newUser: User = users.create(name, password);
  // sendDataBack
  const userID = newUser.id;
  console.log({ userID });
};
