/* eslint-disable max-classes-per-file */
import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Session } from "../../models/Session";
import { CreateProfileController } from "../CreateProfileController";
import { LoginController } from "../LoginController";

export abstract class StateController {
  protected session: Session;

  constructor(session: Session) {
    this.session = session;
  }
}

export class InitialController extends StateController {
  private readonly createProfileController: CreateProfileController;
  private readonly loginController: LoginController;

  constructor(session: Session) {
    super(session);
    const persistenceService = new FileSystemProfilePersistenceService();
    this.createProfileController = new CreateProfileController(persistenceService, session);
    this.loginController = new LoginController(persistenceService, session);
  }

  public getLoginController(): LoginController {
    return this.loginController;
  }

  public getCreateProfileController(): CreateProfileController {
    return this.createProfileController;
  }
}
export class InAppController extends StateController {
}
export class SwippingController extends StateController {
}
export class MatchListController extends StateController {
}
export class ConversationController extends StateController {
}
