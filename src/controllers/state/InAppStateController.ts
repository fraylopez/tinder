import { FileSystemUserPersistenceService } from "../../infrastructure/file-system/FileSystemUserPersistenceService";
import { Transition } from "../../models/navigation/Transition";
import { Profile } from "../../models/Profile";
import { Session } from "../../models/Session";
import { StartSwippingController } from "../StartSwippingController";
import { StateController } from "./StateControllers";

export class InAppStateController extends StateController {
  private readonly startSwippingController: StartSwippingController;
  constructor(session: Session) {
    super(session);
    this.startSwippingController = new StartSwippingController(FileSystemUserPersistenceService.getInstance());
  }

  public startSwipping(): Profile[] {
    return this.startSwippingController.control(this.session.getUser());
  }

  public getProfile(): Profile {
    const profile = this.session.getProfile();
    this.session.transit(Transition.GET_PROFILE);
    return profile;
  }
}
