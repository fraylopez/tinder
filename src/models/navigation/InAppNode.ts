import { Node } from "./Node";
import { State } from "./State";
import { Transition } from "./Transition";
import { ProfileNode } from "./ProfileNode";
import { SwippingNode } from "./SwippingNode";

export class InAppNode extends Node {
  constructor() {
    super(State.IN_APP);
    this.addTransition(Transition.START_SWIPPING, new SwippingNode());
    this.addTransition(Transition.GET_PROFILE, new ProfileNode());
  }
}
