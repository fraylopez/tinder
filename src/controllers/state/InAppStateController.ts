import { Transition } from "../../models/navigation/Transition";
import { Profile } from "../../models/Profile";
import { Session } from "../../models/Session";
import { StateController } from "./StateControllers";

export class InAppStateController extends StateController {
  constructor(session: Session) {
    super(session);
  }

  public startSwiping(): void {
    this.session.transit(Transition.START_SWIPING);
  }

  public getProfile(): Profile {
    const profile = this.session.getProfile();
    this.session.transit(Transition.GET_PROFILE);
    return profile;
  }
}
