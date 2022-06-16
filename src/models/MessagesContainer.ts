import { Message, MessagePrimitives } from "./Message";

export class MessagesContainer {
  static fromPrimitives(messages: MessagePrimitives[]): MessagesContainer {
    return new MessagesContainer(messages.map((message) => Message.fromPrimitives(message)));
  }

  constructor(private readonly messages: Message[] = []) { }

  public add(fromId: string, toId: string, content: string): void {
    this.messages.push(
      Message.fromPrimitives({
        fromId,
        toId,
        content
      })
    );
  }

  toPrimitives(): MessagePrimitives[] {
    return this.messages.map((message) => message.toPrimitives());
  }
}
