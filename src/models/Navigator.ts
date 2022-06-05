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
  OPEN_CONVERSATION = "open-conversation",
  BACK = "back",
}

export enum State {
  INITIAL = "initial",
  IN_APP = "in-app",
  SWIPPING = "swipping",
  PROFILE = "profile",
  CONVERSATION = "conversation",
}

abstract class Node {
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

  protected addTransition(event: Transition, node: Node): void {
    this.nodes.set(event, node);
    node.addBackTransition(this);
  }

  public removeBack(): void {
    const d = this.nodes.delete(Transition.BACK);
    console.log(d);
  }

  protected addBackTransition(node: Node): void {
    this.nodes.set(Transition.BACK, node);
  }
}

class InitialNode extends Node {
  constructor() {
    super(State.INITIAL);
    const inAppNode = new InAppNode();
    this.addTransition(Transition.LOGIN, inAppNode);
    this.addTransition(Transition.CREATE_USER, inAppNode);
    inAppNode.removeBack();
  }
}

class InAppNode extends Node {
  constructor(config?: { avoidStartSwipping: boolean }) {
    super(State.IN_APP);
    if (!config?.avoidStartSwipping) {
      this.addTransition(Transition.START_SWIPPING, new SwippingNode());
    }
    this.addTransition(Transition.GET_PROFILE, new ProfileNode());
  }
}

class SwippingNode extends Node {
  constructor() {
    super(State.SWIPPING);
    this.addTransition(Transition.SWIPE_DONE, new InAppNode({ avoidStartSwipping: true }));
    this.addTransition(Transition.OPEN_CONVERSATION, new ConversationNode());
  }
}

class ProfileNode extends Node {
  constructor() {
    super(State.PROFILE);
  }
}

class ConversationNode extends Node {
  constructor() {
    super(State.CONVERSATION);
  }
}
