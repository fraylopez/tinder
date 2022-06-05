import { MatchPrimitives } from "./MatchPrimitives";

export class Match {
  static fromPrimitives(match: MatchPrimitives): Match {
    return new Match(match.id);
  }

  constructor(private readonly id: string) {}

  public toPrimitives(): MatchPrimitives {
    return {
      id: this.id,
    };
  }
}
