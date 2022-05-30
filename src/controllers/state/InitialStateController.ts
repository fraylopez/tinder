import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Session } from "../../models/Session";
import { CreateProfileController } from "../CreateProfileController";
import { LoginController } from "../LoginController";
import { StateController } from "./StateControllers";

export class InitialStateController extends StateController {
  private readonly createProfileController: CreateProfileController;
  private readonly loginController: LoginController;

  constructor(session: Session) {
    super(session);
    this.createProfileController = new CreateProfileController(FileSystemProfilePersistenceService.getInstance());
    this.loginController = new LoginController(FileSystemProfilePersistenceService.getInstance());
  }

  public login(name: string): boolean {
    const isValidCredentials = this.loginController.control(name);
    if (isValidCredentials) {
      this.session.login(name);
    }
    return !!isValidCredentials;
  }

  public createProfile(name: string, age: number, gender: string): void {
    this.createProfileController.control(name, age, gender);
  }
}
