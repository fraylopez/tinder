import { User } from "./User";

export class Swipe {
  constructor(private readonly swipper: User) {}

  swipe(direction: string) {
    throw new Error("Method not implemented.");
  }
}
