import { Node } from "./Node";
import { State } from "./State";
import { Transition } from "./Transition";
import { ConversationNode } from "./ConversationNode";

export class SwipingNode extends Node {
  constructor() {
    super(State.SWIPING);
    this.addTransition(Transition.OPEN_CONVERSATION, new ConversationNode());
  }
}
