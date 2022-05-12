import assert from "assert";
import { ProfilePrimitives } from "./ProfilePrimitives";
import { Swipe } from "./Swipe";
import { UnderAgeError } from "./UnderAgeError";

export class Profile {
  private name: string;
  private age: number;
  private gender: string;
  private swipes: Swipe[];

  public static fromPrimitives(primitives: ProfilePrimitives): Profile {
    const profile = new Profile(primitives.name, primitives.age, primitives.gender);
    profile.swipes = primitives.swipes.map(swipe => Swipe.fromPrimitives(swipe));
    return profile;
  }

  constructor(name: string, age: number, gender: string) {
    assert(age >= 18, new UnderAgeError());
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.swipes = new Array<Swipe>();
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

  public likes(profile: Profile): boolean {
    return !!this.swipes.find(swipe => swipe.isCandidateEquals(profile));
  }

  public update(): void {
    // TODO: update(properties: Partial<ProfilePrimitives>): void
    console.log("TODO: update profile properties", this.name);
  }

  public addSwipe(swipe: Swipe) {
    this.swipes.push(swipe);
  }

  public toPrimitives(): ProfilePrimitives {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      swipes: this.swipes.map(swipe => swipe.toPrimitives()),
    }
  }
}
