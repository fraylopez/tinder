import assert from "assert";
import { ProfilePrimitives } from "./ProfilePrimitives";
import { UnderAgeError } from "./UnderAgeError";

export class Profile {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    assert(age >= 18, new UnderAgeError());
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

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  public toPrimitives(): ProfilePrimitives {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
    };
  }

  public updateWithPrimitives(profilePrimitives: ProfilePrimitives) {
    this.name = profilePrimitives.name;
    this.age = profilePrimitives.age;
    this.gender = profilePrimitives.gender;
  }
}
