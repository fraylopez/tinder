import { StateView } from "./StateView";

export class ConversationView extends StateView {
  render(): void {
    this.console.writeln(`this is match conversation view with controller ${this.controller.constructor.name}`);
  }
}
