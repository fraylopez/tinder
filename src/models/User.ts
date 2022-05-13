import { Profile } from "./Profile";
import { Swipe } from "./Swipe";
import { UserPrimitives } from "./UserPrimitives";

export class User {
  private id: string;
  private profile: Profile;
  private swipes: Swipe[];

  constructor() { }

  public swipe(swipe: Swipe): void {
    this.swipes.push(swipe)
  }

  public getId(): string {
    return this.id;
  }

  public toPrimitives(): UserPrimitives {
    return {
      id: this.id, profile: this.profile.toPrimitives(),
      swipes: this.swipes.map((swipe) => swipe.toPrimitives())
    }
  }
}
