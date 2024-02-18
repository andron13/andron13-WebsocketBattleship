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

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  delete(id: number): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.id !== id);
    return this.users.length < initialLength;
  }

  getAll(): User[] {
    return this.users;
  }
  getWinners() {
    return this.users.map((user) => {
      return { name: user.name, wins: user.wins };
    });
  }
}

export const users = UserService.getInstance();
