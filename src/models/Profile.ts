import { assert } from "console";
import { ProfilePrimitives } from "./ProfilePrimitives";

export class Profile {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    assert(age >= 18, "under age");
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public static fromPrimitives(primitives: ProfilePrimitives): Profile {
    return new Profile(primitives.name, primitives.age, primitives.gender);
  }

  getName() {
    return this.name;
  }

  public toPrimitives(): ProfilePrimitives {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
    }
  }
}
