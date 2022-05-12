import { User } from "../models/User";
import { SwipeDirection } from "../models/SwipeDirection";
import { Profile } from "../models/Profile";

export class SwipeController {
  private readonly user: User;

  constructor() {
    // TODO:
    this.user = new User();
  }

  public control(candidate: Profile, swipeDirection: SwipeDirection): void {
    this.user.swipes(candidate, swipeDirection);
    console.log("TODO: this.persistenceService.update(user)!", this.user.toPrimitives());
  }
}