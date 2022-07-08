import { Node } from "./Node";
import { State } from "./State";
import { Transition } from "./Transition";
import { MatchListNode } from "./MatchListNode";

export class ConversationNode extends Node {
  constructor() {
    super(State.CONVERSATION);
    this.addTransition(Transition.GET_MATCHES, new MatchListNode());
  }
}
