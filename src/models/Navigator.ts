/* eslint-disable max-classes-per-file */

export class Navigator {
  private currentNode: Node;

  constructor() {
    this.currentNode = new InitialNode();
  }

  public getCurrentState(): string {
    return this.currentNode.getName();
  }

  public transit(transition: string): void {
    this.currentNode = this.currentNode.transit(transition);
  }
}

abstract class Node {
  private readonly nodes: Map<string, Node>;

  constructor(private readonly name: string) {
    this.nodes = new Map();
  }

  public transit(transition: string): Node {
    const newNode = this.nodes.get(transition);
    if (!newNode) {
      throw new Error(`Missing transition: ${transition}`);
    }
    return newNode;
  }

  public getName(): string {
    return this.name;
  }

  protected addTransition(event: string, node: Node): void {
    this.nodes.set(event, node);
  }
}

class InitialNode extends Node {
  constructor() {
    super("initial");
    this.addTransition("login", new InAppNode());
    this.addTransition("create-user", new InAppNode());
  }
}

class InAppNode extends Node {
  constructor() {
    super("in-app");
    this.addTransition("start-swipping", new SwippingNode());
  }
}

class SwippingNode extends Node {
  constructor() {
    super("swipping");
  }
}
