import { DeleteProfileController } from "../../controllers/DeleteProfileController";
import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ConsoleView } from "./ConsoleView";
import { CreateProfileView } from "./CreateProfileView";
import { DeleteProfileView } from "./DeleteProfileView";
import { LoginView } from "./LoginView";

export class InitialView extends ConsoleView {
  private createProfileView: CreateProfileView;
  private deleteProfileView: DeleteProfileView;
  private loginView: LoginView;

  constructor() {
    super();
    this.createProfileView = new CreateProfileView();
    this.deleteProfileView = new DeleteProfileView(
      new DeleteProfileController(new FileSystemProfilePersistenceService())
    );
    this.loginView = new LoginView();
  }

  public async render(): Promise<void> {
    this.console.print("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.console.print(
      "[UIVIEW] - Please, choose the option you want to perform [1/3]:"
    );

    let option = await this.console.read([
      "1- Create a profile",
      "2- Login with an existing profile",
      "3- Delete profile",
    ]);
    do {
      option = option;
      if (option === "1") {
        this.createProfileView.render();
      } else if (option === "2") {
        this.loginView.render();
      } else if (option === "3") {
        this.deleteProfileView.render();
      } else {
        this.console.print(
          "[UIVIEW] - Wrong input selected. Please, choose again [1/3]:"
        );
      }
    } while (option !== "1" && option !== "2" && option !== "3");
  }
}
