import { ConversationStateController } from "../../../../server/controllers/state/ConversationStateController";
import { Session } from "../../../../server/models/Session";
import { StateView } from "./StateView";

export class ConversationStateView extends StateView {
  constructor(session: Session) {
    super(session, new ConversationStateController(session));
  }

  render(): void {
    this.console.writeln(`this is match conversation view with controller ${this.controller.constructor.name}`);
  }
}
