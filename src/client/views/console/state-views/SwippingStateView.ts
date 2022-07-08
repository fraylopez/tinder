import { SwippingStateController } from "../../../../server/controllers/state/SwippingStateController";
import { Session } from "../../../../server/models/Session";
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
