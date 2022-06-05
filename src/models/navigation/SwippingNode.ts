import { Node } from "./Node";
import { State } from "./State";
import { Transition } from "./Transition";
import { ConversationNode } from "./ConversationNode";

export class SwippingNode extends Node {
  constructor() {
    super(State.SWIPPING);
    this.addTransition(Transition.OPEN_CONVERSATION, new ConversationNode());
  }
}
