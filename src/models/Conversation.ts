/* eslint-disable max-classes-per-file */
import { Message } from "./Message";
import { MessagesContainer } from "./MessagesContainer";
import { User } from "./User";
export class Conversation {
  private readonly participants: User[];
  private readonly messages: MessagesContainer;

  constructor() {
    this.participants = [];
    this.messages = new MessagesContainer();
  }

  addMessage(fromId: string, toId: string, content: string) {
    this.messages.add(fromId, toId, content)
  }
}
