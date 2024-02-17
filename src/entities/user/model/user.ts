export class User {
  id: string;
  username: string;
  password: string;
  winCount: number;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.id = User.countID();
  }
  static countID() {
    return Date.now().toString();
  }
}
