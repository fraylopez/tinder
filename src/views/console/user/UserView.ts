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

export class UserView {
  private loginView: LoginView;
  private createProfileView: CreateProfileView;
  private editProfileView: EditProfileView;
  private deleteProfileView: DeleteProfileView;
  private getProfileView: GetProfileView;

  constructor() {
    this.loginView = new LoginView(
      new LoginController(),
    );
    this.createProfileView = new CreateProfileView(
      new CreateProfileController(), // TODO: implementation
    );
    this.editProfileView = new EditProfileView(
      new EditProfileController(
        new GetProfileController(),
        new FileSystemProfilePersistenceService(),
      )
    );
    this.deleteProfileView = new DeleteProfileView(
      new DeleteProfileController(
        new FileSystemProfilePersistenceService(),
      ),
    );
    this.getProfileView = new GetProfileView(
      new GetProfileController(),
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
