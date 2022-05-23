import { Session } from "../../../models/Session";
import { ProfileStateController } from "../../../controllers/state/ProfileStateController";
import { StateView } from "./StateView";

export class ProfileStateView extends StateView {
  constructor(session: Session) {
    const controller = new ProfileStateController(session);
    super(session, controller);
  }

  render(): void {
    this.console.writeln(`this is profile view with controller ${this.controller.constructor.name}`);
  }
}
