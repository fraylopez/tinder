import { SwippingStateController } from "../../../controllers/state/SwippingStateController";
import { Session } from "../../../models/Session";
import { StateView } from "./StateView";

export class SwippingStateView extends StateView<SwippingStateController> {
  constructor(session: Session) {
    super(session, new SwippingStateController(session));
  }

  render(): void {
    this.console.writeln(`this is swipping view with controller ${this.controller.constructor.name}`);
  }
}
