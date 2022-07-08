import { Node } from "./Node";
import { State } from "./State";

export class MatchListNode extends Node {
  constructor() {
    super(State.MATCH_LIST);
  }
}
