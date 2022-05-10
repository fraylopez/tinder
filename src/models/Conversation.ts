import { User } from "./User";

export class Conversation {
  private readonly participants: User[];

  constructor() {
    this.participants = [];
  }
}
