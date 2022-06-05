import { Profile } from "./Profile";
import { SwipeDirection } from "./SwipeDirection";
import { SwipePrimitives } from "./SwipePrimitives";

export class Swipe {
  static fromPrimitives(swipe: SwipePrimitives): Swipe {
    return new Swipe(swipe.direction, swipe.to);
  }

  constructor(private direction: SwipeDirection, private to: string) {}

  public isRight(): boolean {
    return this.direction === SwipeDirection.Right;
  }

  public equals(swipe: Swipe): boolean {
    return this.to === swipe.to && this.direction === swipe.direction;
  }

  public getTo(): string {
    return this.to;
  }

  public canLike(profile: Profile): boolean {
    return this.to === profile.getId();
  }

  public toPrimitives(): SwipePrimitives {
    return {
      direction: this.direction,
      to: this.to,
    };
  }
}
