import { Profile } from "./Profile";
import { Swipe } from "./Swipe";
import { SwipeDirection } from "./SwipeDirection";
import { SwipePrimitives } from "./SwipePrimitives";

export class SwipesContainer {
  static fromPrimitives(swipes: SwipePrimitives[]): SwipesContainer {
    return new SwipesContainer(swipes.map((swipe) => Swipe.fromPrimitives(swipe)));
  }

  constructor(private readonly swipes: Swipe[] = []) {}

  public in(swipe: Swipe): boolean {
    return !!this.swipes.find((s) => s.equals(swipe));
  }

  public add(direction: SwipeDirection, candidate: Profile): void {
    this.swipes.push(
      Swipe.fromPrimitives({
        direction,
        to: candidate.getId(),
      })
    );
  }

  toPrimitives(): SwipePrimitives[] {
    return this.swipes.map((swipe) => swipe.toPrimitives());
  }
}
