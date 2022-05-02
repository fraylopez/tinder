import { LoginView } from "./LoginView";
import { CreateProfileView } from "./CreateProfileView";
import { DeleteProfileView } from "./DeleteProfileView";
import { EditProfileView } from "./EditProfileView";
import { GetProfileView } from "./GetProfileView";
import { LoginController } from "../../../controllers/LoginController";
import { CreateProfileController } from "../../../controllers/CreateProfileController";
import { DeleteProfileController } from "../../../controllers/DeleteProfileController";
import { EditProfileController } from "../../../controllers/EditProfileController";
import { GetProfileController } from "../../../controllers/GetProfileController";
import { FileSystemProfilePersistenceService } from "../../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ProfileView } from "./ProfileView";

export class UserView {
  private loginView: LoginView;
  private createProfileView: CreateProfileView;
  private editProfileView: EditProfileView;
  private deleteProfileView: DeleteProfileView;
  private getProfileView: GetProfileView;

  constructor() {
    const fileSystemProfilePersistenceService = new FileSystemProfilePersistenceService();
    this.loginView = new LoginView(
      new LoginController(
        fileSystemProfilePersistenceService,
      ),
    );
    this.createProfileView = new CreateProfileView(
      new CreateProfileController(
        fileSystemProfilePersistenceService,
      ),
    );
    this.editProfileView = new EditProfileView(
      new EditProfileController(
        new GetProfileController(
          fileSystemProfilePersistenceService,
        ),
        fileSystemProfilePersistenceService,
      )
    );
    this.deleteProfileView = new DeleteProfileView(
      new DeleteProfileController(
        fileSystemProfilePersistenceService,
      ),
    );
    this.getProfileView = new GetProfileView(
      new ProfileView(),
      new GetProfileController(
        fileSystemProfilePersistenceService,
      ),
    );
  }

  public login(): void {
    this.loginView.render();
  }

  public createProfile(): void {
    this.createProfileView.render();
  }

  public editProfile(): void {
    this.editProfileView.render();
  }

  public deleteProfile(): void {
    this.deleteProfileView.render();
  }

  public getProfile(): void {
    this.getProfileView.render();
  }
}