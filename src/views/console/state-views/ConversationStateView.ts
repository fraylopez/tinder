import { ConversationStateController } from "../../../controllers/state/ConversationStateController";
import { Session } from "../../../models/Session";
import { StateView } from "./StateView";

export class ConversationStateView extends StateView {
  constructor(session: Session) {
    const controller = new ConversationStateController(session);
    super(session, controller);
  }

  render(): void {
    this.console.writeln(`this is match conversation view with controller ${this.controller.constructor.name}`);
  }
}
