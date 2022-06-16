import { Conversation } from "./Conversation";
import { MatchPrimitives } from "./MatchPrimitives";

export class Match {

  private conversation: Conversation;

  static fromPrimitives(match: MatchPrimitives): Match {
    return new Match(match.id);
  }

  constructor(private readonly id: string) {}

  public setConversation(conversation: Conversation) {
    this.conversation = conversation;
  }

  public toPrimitives(): MatchPrimitives {
    return {
      id: this.id,
    };
  }
}
