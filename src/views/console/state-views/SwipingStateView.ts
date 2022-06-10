import { SwipingStateController } from "../../../controllers/state/SwipingStateController";
import { Session } from "../../../models/Session";
import { SwipingProfilesView } from "../user/SwipingProfilesView";
import { StateView } from "./StateView";

export class SwipingStateView extends StateView<SwipingStateController> {
  constructor(session: Session) {
    super(session, new SwipingStateController(session));
  }

  render(): void {
    new SwipingProfilesView(this.controller).render();
  }
}
