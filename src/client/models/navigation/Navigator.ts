import { InitialNode } from "./InitialNode";
import { Node } from "./Node";
import { State } from "./State";
import { Transition } from "./Transition";

export class Navigator {
  private currentNode: Node;

  constructor(transitions?: Transition[]) {
    this.currentNode = new InitialNode();
    if (transitions) {
      this.restart(transitions);
    }
  }

  public getCurrentState(): State {
    return this.currentNode.getName();
  }

  public transit(transition: Transition): void {
    const newNode = this.currentNode.transit(transition);
    if (newNode) {
      this.currentNode = newNode;
    }
  }

  public restart(transitions: Transition[]): void {
    this.currentNode = new InitialNode();
    for (const transition of transitions) {
      this.transit(transition);
    }
  }

  public logout(): void {
    this.restart([]);
  }

  public back(): void {
    this.transit(Transition.BACK);
  }
}
