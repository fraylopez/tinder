import { CreateProfileController } from "../../controllers/CreateProfileController";
import { DeleteProfileController } from "../../controllers/DeleteProfileController";
import { EditProfileController } from "../../controllers/EditProfileController";
import { GetProfileController } from "../../controllers/GetProfileController";
import { LoginController } from "../../controllers/LoginController";
import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ConsoleView } from "./ConsoleView";
import { CreateProfileView } from "./CreateProfileView";
import { DeleteProfileView } from "./DeleteProfileView";
import { EditProfileView } from "./EditProfileView";
import { GetProfileView } from "./GetProfileView";
import { LoginView } from "./LoginView";

export class InitialView extends ConsoleView {
  private createProfileView: CreateProfileView;
  private deleteProfileView: DeleteProfileView;
  private getProfileView: GetProfileView;
  private editProfileView: EditProfileView;

  private loginView: LoginView;

  constructor() {
    super();

    //profile controller
    this.deleteProfileView = new DeleteProfileView(
      new DeleteProfileController(new FileSystemProfilePersistenceService())
    );

    this.createProfileView = new CreateProfileView(
      new CreateProfileController()
    );

    this.getProfileView = new GetProfileView(new GetProfileController());
    //

    this.editProfileView = new EditProfileView(
      new GetProfileController(),
      new EditProfileController(new FileSystemProfilePersistenceService())
    );

    this.loginView = new LoginView(new LoginController());
  }

  public async render(): Promise<void> {
    this.console.print("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.console.print(
      "[UIVIEW] - Please, choose the option you want to perform [1/5]:"
    );

    let option: string;

    do {
      option = await this.console.read([
        "\n1- Create a profile",
        "2- Login with an existing profile",
        "3- Delete profile",
        "4- Edit profile",
        "5- Exit\n",
      ]);

      switch (option) {
        case "1":
          await this.createProfileView.render();
          break;
        case "2":
          await this.loginView.render();
          break;
        case "3":
          await this.deleteProfileView.render();
          break;
        case "4":
          await this.editProfileView.render();
          break;
        default:
          this.console.print(
            "[UIVIEW] - Wrong input selected. Please, choose again [1/5]:"
          );
      }
    } while (option !== "5");
  }
}
