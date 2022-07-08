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

  public getId(): string {
    return this.name;
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public getGender() {
    return this.gender;
  }

  public equals(profile: Profile): boolean {
    return this.age === profile.age && this.name === profile.name && this.gender === profile.gender;
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
