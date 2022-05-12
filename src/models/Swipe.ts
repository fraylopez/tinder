import { Profile } from "./Profile";
import { SwipePrimitives } from "./SwipePrimitives";

export class Swipe {
  public static fromPrimitives(primitives: SwipePrimitives): Swipe {
    return new Swipe(
      Profile.fromPrimitives(primitives.owner),
      Profile.fromPrimitives(primitives.candidate),
      primitives.isRight,
    )
  }

  constructor(
    private readonly owner: Profile,
    private readonly candidate: Profile,
    public readonly isRight: boolean,
  ) {
  }

  public isMatch(): boolean {
    return this.isRight && this.candidate.likes(this.owner);
  }

  public isCandidateEquals(profile: Profile): boolean {
    // TODO: this.candidate.equals(profile)
    return this.candidate === profile;
  }

  public toPrimitives(): SwipePrimitives {
    return {
      owner: this.owner.toPrimitives(),
      candidate: this.candidate.toPrimitives(),
      isRight: this.isRight,
    }
  }
}
