import { Profile } from "./Profile";
import { Swipe } from "./Swipe";
import { SwipeDirection } from "./SwipeDirection";

export class User {
  public readonly id: string;
  public readonly profile: Profile;

  constructor() {
  }

  public swipes(profile: Profile, direction: SwipeDirection): void {
    this.profile.addSwipe(
      new Swipe(this.profile, profile, direction.isRight())
    );
  }

  public toPrimitives(): object {
    return {
      id: this.id,
      profile: this.profile.toPrimitives(),
    }
  }
}
