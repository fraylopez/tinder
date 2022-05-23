import { InAppStateController } from "../../../controllers/state/InAppStateController";
import { Session } from "../../../models/Session";
import { StateView } from "./StateView";

export class InAppStateView extends StateView {
  constructor(session: Session) {
    const controller = new InAppStateController(session);
    super(session, controller);
  }
  render(): void {
    this.console.writeln(`this is inapp view with controller ${this.controller.constructor.name}`);
    this.console.readString("press enter to continue");
  }
}
