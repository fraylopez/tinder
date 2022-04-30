import { CreateProfileController } from "../../controllers/CreateProfileController";
import { DeleteProfileController } from "../../controllers/DeleteProfileController";
import { GetProfileController } from "../../controllers/GetProfileController";
import { LoginController } from "../../controllers/LoginController";
import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ConsoleView } from "./ConsoleView";
import { CreateProfileView } from "./CreateProfileView";
import { DeleteProfileView } from "./DeleteProfileView";
import { GetProfileView } from "./GetProfileView";
import { LoginView } from "./LoginView";

export class InitialView extends ConsoleView {
  private createProfileView: CreateProfileView;
  private deleteProfileView: DeleteProfileView;
  private getProfileView: GetProfileView;
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
    this.loginView = new LoginView(new LoginController());
  }

  public render(): void {
    this.console.writeInln("WELCOME TO TINDER🔥");
    this.console.writeInln("Please, choose the option you want to perform [1/4]:");
    const options = "\n1- Create a profile\n" + 
    "2- Login with an existing profile\n" +
    "3- Delete profile\n" +
    "4- Exit\n";
    let option: number;
    do {
      option = this.console.readInt(options);
      switch (option) {
        case 1:
          this.createProfileView.render();
          break;
        case 2:
          this.loginView.render();
          break;
        case 3:
          this.deleteProfileView.render();
          break;
        default:
          this.console.writeInln("Wrong input selected. Please, choose again [1/4]:");
      }
    } while (option !== 4);
  }
}
