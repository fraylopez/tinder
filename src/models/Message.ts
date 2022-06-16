export interface MessagePrimitives {
  fromId: string;
  toId: string;
  content: string;
}

export class Message {
  static fromPrimitives(message: MessagePrimitives): Message {
    return new Message(message.fromId, message.toId, message.content);
  }

  constructor(
    private readonly fromId: string,
    private readonly toId: string,
    private readonly content: string
  ) {}

  public toPrimitives(): MessagePrimitives {
    return {
      fromId: this.fromId,
      toId: this.toId,
      content: this.content,
    };
  }
}