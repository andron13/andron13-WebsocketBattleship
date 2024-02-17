export class User {
  id: string;
  name: string;
  password: string;
  winCount: number;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
    this.winCount = 0;
    this.id = User.generateID();
    console.log(this);
  }

  static generateID() {
    return Date.now().toString();
  }

  setWin() {
    this.winCount++;
  }
}
