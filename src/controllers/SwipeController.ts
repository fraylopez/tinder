import { Profile } from "../models/Profile";

export class SwipeController {

  public async control(from: Profile, to: Profile): Promise<boolean> {
    // TODO: we need to persist swipes in order to check if this swipe right produces a Match
    return true;
  }

}