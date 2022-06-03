import { Profile } from "./Profile";

export class Swipe {
  constructor(private direction: boolean, private from: Profile, private to: Profile) {}

  public isRight(): boolean {
    return this.direction === true;
  }

  public equals(swipe: Swipe): boolean {
    return this.from.equals(swipe.from) && this.to.equals(swipe.to) && this.direction === swipe.direction;
  }

  public canLike(profile: Profile): boolean {
    return this.to.equals(profile);
  }
}
