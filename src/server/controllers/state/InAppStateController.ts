import { Transition } from "../../models/navigation/Transition";
import { Profile } from "../../../server/models/Profile";
import { Session } from "../../../server/models/Session";
import { StateController } from "./StateControllers";

export class InAppStateController extends StateController {
  constructor(session: Session) {
    super(session);
  }

  public startSwipping(): void {
    this.session.transit(Transition.START_SWIPPING);
  }

  public getProfile(): Profile {
    const profile = this.session.getProfile();
    this.session.transit(Transition.GET_PROFILE);
    return profile;
  }
}
