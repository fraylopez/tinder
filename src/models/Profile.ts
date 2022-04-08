export class Profile {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  serialize(): ProfileDocument {
    return {
      name: this.name,
      age: this.age,
    };
  }
}

export interface ProfileDocument {
  name: string;
  age: number;
}
