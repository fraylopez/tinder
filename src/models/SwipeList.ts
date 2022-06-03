import { Swipe } from "./Swipe";

export class SwipeList {
  constructor(private readonly swipes: Swipe[]) {}

  public in(swipe: Swipe): boolean {
    return !!this.swipes.find((s) => s.equals(swipe));
  }

  public add(swipe: Swipe): void {
    this.swipes.push(swipe);
  }
}
