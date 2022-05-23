import { Profile } from "./Profile";
import { Swipe } from "./Swipe";
import { UserPrimitives } from "./UserPrimitives";

export class User {
  private id: string;
  private profile: Profile;
  private swipes: Swipe[];

  constructor(profile: Profile, swipes: Swipe[] = []) {
    this.id = profile.getName();
    this.profile = profile;
    this.swipes = swipes;
  }

  public swipe(direction: boolean, candidate: Profile): void {
    this.swipes.push(new Swipe(direction, candidate));
  }

  public getId(): string {
    return this.id;
  }

  match(profile: Profile): boolean {
    return this.profile.equals(profile);
  }

  public toPrimitives(): UserPrimitives {
    return {
      id: this.id,
      profile: this.profile.toPrimitives(),
      swipes: this.swipes.map((swipe) => swipe.toPrimitives()),
    };
  }
}
