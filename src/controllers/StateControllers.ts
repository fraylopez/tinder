/* eslint-disable max-classes-per-file */
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Session } from "../models/Session";
import { LoginController } from "./LoginController";
import { ProfileController } from "./ProfileController";

export abstract class StateController {
  protected session: Session;

  constructor(session: Session) {
    this.session = session;
  }
}

export class InitialController extends StateController {
  private readonly profileController: ProfileController;
  private readonly loginController: LoginController;

  constructor(session: Session) {
    super(session);
    const persistenceService = new FileSystemProfilePersistenceService();
    this.profileController = new ProfileController(persistenceService);
    this.loginController = new LoginController(persistenceService);
  }

  public getLoginController(): LoginController {
    return this.loginController;
  }

  public getCreateProfileController(): ProfileController {
    return this.profileController;
  }
}
export class InAppController extends StateController {
}
export class SwippingController extends StateController {
}
// export class ProfileController extends StateController {
// }
export class MatchListController extends StateController {
}
export class ConversationController extends StateController {
}
