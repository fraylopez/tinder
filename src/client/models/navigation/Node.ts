import { State } from "./State";
import { Transition } from "./Transition";

export abstract class Node {
  private readonly nodes: Map<Transition, Node>;

  constructor(private readonly name: State) {
    this.nodes = new Map();
  }

  public transit(transition: Transition): Node {
    const newNode = this.nodes.get(transition);
    // TODO: assert newNode
    return newNode!;
  }

  public getName(): State {
    return this.name;
  }

  protected addTransition(transition: Transition, node: Node): void {
    this.nodes.set(transition, node);
    node.addBackTransition(this);
  }

  public removeBack(): void {
    this.nodes.delete(Transition.BACK);
  }

  protected addBackTransition(node: Node): void {
    this.nodes.set(Transition.BACK, node);
  }
}
