import { SwippingStateController } from "../../../controllers/state/SwippingStateController";
import { Session } from "../../../models/Session";
import { SwippingProfilesView } from "../user/SwippingProfilesView";
import { StateView } from "./StateView";

export class SwippingStateView extends StateView<SwippingStateController> {
  constructor(session: Session) {
    super(session, new SwippingStateController(session));
  }

  render(): void {
    new SwippingProfilesView(this.controller).render();
  }
}
