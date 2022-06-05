import { Match } from "./Match";
import { MatchPrimitives } from "./MatchPrimitives";

export class MatchesContainer {
  static fromPrimitives(matches: MatchPrimitives[]): MatchesContainer {
    return new MatchesContainer(matches.map((match) => Match.fromPrimitives(match)));
  }

  constructor(private readonly matches: Match[] = []) {}

  public add(match: Match): void {
    this.matches.push(match);
  }

  public toPrimitives(): MatchPrimitives[] {
    return this.matches.map((match) => match.toPrimitives());
  }
}
