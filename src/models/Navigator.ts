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

  public back(): void {
    this.transit(Transition.BACK);
  }
}

export enum Transition {
  LOGIN = "login",
  CREATE_USER = "create-user",
  START_SWIPPING = "start-swipping",
  SWIPE_DONE = "swipe-done",
  GET_PROFILE = "get-profile",
  BACK = "back",
}

export enum State {
  INITIAL = "initial",
  IN_APP = "in-app",
  SWIPPING = "swipping",
  PROFILE = "profile",
}

abstract class Node {
  private readonly nodes: Map<string, Node>;

  constructor(private readonly name: State) {
    this.nodes = new Map();
  }

  public transit(transition: string): Node {
    const newNode = this.nodes.get(transition);
    // TODO: assert newNode
    return newNode!;
  }

  public getName(): State {
    return this.name;
  }

  protected addTransition(event: string, node: Node): void {
    this.nodes.set(event, node);
    node.addBackTransition(this);
  }

  public removeBack(): void {
    const d = this.nodes.delete(Transition.BACK);
    console.log(d);
  }

  protected addBackTransition(node: Node): void {
    this.nodes.set("back", node);
  }
}

class InitialNode extends Node {
  constructor() {
    super(State.INITIAL);
    const inAppNode = new InAppNode();
    this.addTransition("login", inAppNode);
    this.addTransition("create-user", inAppNode);
    inAppNode.removeBack();
  }
}

class InAppNode extends Node {
  constructor(config?: { avoidStartSwipping: boolean }) {
    super(State.IN_APP);
    if (!config?.avoidStartSwipping) {
      this.addTransition("start-swipping", new SwippingNode());
    }
    this.addTransition(Transition.GET_PROFILE, new ProfileNode());
  }
}

class SwippingNode extends Node {
  constructor() {
    super(State.SWIPPING);
    this.addTransition(Transition.SWIPE_DONE, new InAppNode({ avoidStartSwipping: true }));
  }
}

class ProfileNode extends Node {
  constructor() {
    super(State.PROFILE);
  }
}
