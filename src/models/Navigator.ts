/* eslint-disable max-classes-per-file */

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
    this.currentNode = this.currentNode.transit(transition);
  }

  public restart(transitions: Transition[]): void {
    this.currentNode = new InitialNode();
    for (const transition of transitions) {
      this.transit(transition);
    }
  }

  public back(): void {
    this.transit(Transition.BACK);
  }
}

export enum Transition {
  LOGIN = "login",
  CREATE_USER = "create-user",
  START_SWIPPING = "start-swipping",
  SWIPE_DONE = "swipe-done",
  BACK = "back",
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
    node.addBackTransition(this);
  }

  protected addBackTransition(node: Node): void {
    this.nodes.set("back", node);
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
  constructor(config?: { avoidStartSwipping: boolean }) {
    super(State.IN_APP);
    if (!config?.avoidStartSwipping) {
      this.addTransition("start-swipping", new SwippingNode());
    }
  }
}

class SwippingNode extends Node {
  constructor() {
    super(State.SWIPPING);
    this.addTransition(Transition.SWIPE_DONE, new InAppNode({ avoidStartSwipping: true }));
  }
}
