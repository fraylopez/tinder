import { SwippingStateController } from "../../../controllers/state/SwippingStateController";
import { Session } from "../../../models/Session";
import { StateView } from "./StateView";

export class SwippingStateView extends StateView {
  constructor(session: Session) {
    const controller = new SwippingStateController(session);
    super(session, controller);
  }

  render(): void {
    this.console.writeln(`this is swipping view with controller ${this.controller.constructor.name}`);
  }
}
