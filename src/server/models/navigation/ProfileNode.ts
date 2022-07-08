import { Node } from "./Node";
import { State } from "./State";

export class ProfileNode extends Node {
  constructor() {
    super(State.PROFILE);
  }
}
