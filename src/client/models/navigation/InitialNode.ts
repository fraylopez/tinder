import { Node } from "./Node";
import { State } from "./State";
import { Transition } from "./Transition";
import { InAppNode } from "./InAppNode";

export class InitialNode extends Node {
  constructor() {
    super(State.INITIAL);
    const inAppNode = new InAppNode();
    this.addTransition(Transition.LOGIN, inAppNode);
    this.addTransition(Transition.CREATE_USER, inAppNode);
    inAppNode.removeBack();
  }
}
