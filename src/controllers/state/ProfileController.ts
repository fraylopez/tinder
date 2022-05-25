import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Session } from "../../models/Session";
// import { CreateProfileController } from "../CreateProfileController";
import { DeleteProfileController } from "../DeleteProfileController";
import { EditProfileController } from "../EditProfileController";
import { GetProfileController } from "../GetProfileController";
import { StateController } from "./StateControllers";

export class ProfileController extends StateController {
  private readonly getProfileController: GetProfileController;
  private readonly deleteProfileController: DeleteProfileController;
  // private readonly createProfileController: CreateProfileController;
  private readonly editProfileController: EditProfileController;

  constructor(session: Session) {
    super(session);
    const persistenceService = new FileSystemProfilePersistenceService();
    this.getProfileController = new GetProfileController(persistenceService);
    this.deleteProfileController = new DeleteProfileController(persistenceService);
    // this.createProfileController = new CreateProfileController(persistenceService);
    this.editProfileController = new EditProfileController(this.getProfileController, persistenceService);
  }

  public getGetProfileController(): GetProfileController {
    return this.getProfileController;
  }

  public getDeleteProfileController(): DeleteProfileController {
    return this.deleteProfileController;
  }

  // public getCreateProfileController(): CreateProfileController {
  //   return this.createProfileController;
  // }

  public getEditProfileController(): EditProfileController {
    return this.editProfileController;
  }
}
