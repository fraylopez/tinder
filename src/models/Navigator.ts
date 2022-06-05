/* eslint-disable max-classes-per-file */

export class Navigator {
  private currentNode: Node;

  constructor() {
    this.currentNode = new InitialNode();
  }

  public getCurrentState(): State {
    return this.currentNode.getName();
  }

  public transit(transition: Transition): void {
    this.currentNode = this.currentNode.transit(transition);
  }
}

export enum Transition {
  LOGIN = "login",
  CREATE_USER = "create-user",
  START_SWIPPING = "start-swipping",
}

export enum State {
  INITIAL = "initial",
  IN_APP = "in-app",
  SWIPPING = "swipping",
}

abstract class Node {
  private readonly nodes: Map<string, Node>;

  constructor(private readonly name: State) {
    this.nodes = new Map();
  }

  public transit(transition: string): Node {
    const newNode = this.nodes.get(transition);
    if (!newNode) {
      throw new Error(`Missing transition: ${transition}`);
    }
    return newNode;
  }

  public getName(): State {
    return this.name;
  }

  protected addTransition(event: string, node: Node): void {
    this.nodes.set(event, node);
  }
}

class InitialNode extends Node {
  constructor() {
    super(State.INITIAL);
    this.addTransition("login", new InAppNode());
    this.addTransition("create-user", new InAppNode());
  }
}

class InAppNode extends Node {
  constructor() {
    super(State.IN_APP);
    this.addTransition("start-swipping", new SwippingNode());
  }
}

class SwippingNode extends Node {
  constructor() {
    super(State.SWIPPING);
  }
}
