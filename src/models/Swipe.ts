import { Profile } from "./Profile";
import { SwipePrimitives } from "./SwipePrimitives";

export class Swipe {
  // true = right
  // false = left
  constructor(private direction: boolean, private candidate: Profile) {}

  public isRight(): boolean {
    return this.direction === true;
  }

  public static fromPrimitives(swipe: SwipePrimitives): Swipe {
    return new Swipe(swipe.direction, Profile.fromPrimitives(swipe.candidate));
  }

  public toPrimitives(): SwipePrimitives {
    return { candidate: this.candidate.toPrimitives(), direction: this.direction };
  }
}
