import { CreateProfileController } from "../../controllers/CreateProfileController";
import { LoginController } from "../../controllers/LoginController";
import { ConsoleView } from "./ConsoleView";
import { CreateProfileView } from "./CreateProfileView";
import { LoginView } from "./LoginView";

export class InitialView extends ConsoleView {

  private createProfileView: CreateProfileView;
  private loginView: LoginView;

  constructor() {
    super();
    this.createProfileView = new CreateProfileView(new CreateProfileController());
    this.loginView = new LoginView(new LoginController());
  }

  public async render(): Promise<void> {
    this.console.print("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.console.print("[UIVIEW] - Please, choose the option you want to perform [1/2]:");

    let option = await this.console.read(
      [
        "1- Create a profile",
        "2- Login with an existing profile"
      ]
    );

    while (option !== "1" && option !== "2") {
      this.console.print("[UIVIEW] - Wrong input selected. Please, choose again [1/2]:");
      option = await this.console.read(
        ["1- Create a profile\n",
          "2- Login with an existing profile"]
      );
    }
    if (option === "1") {
      this.createProfileView.render();
    } else {
      this.loginView.render();
    }
  }
}
