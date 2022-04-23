import { CreateProfileController } from "../../controllers/CreateProfileController";
import { Console } from "./Console";
import { CreateProfileView } from "./CreateProfileView";
import { LoginView } from "./LoginView";

export class InitialView {
  private console: Console;
  private createProfileView: CreateProfileView;
  private loginView: LoginView;

  constructor() {
    this.console = new Console();
    this.createProfileView = new CreateProfileView(new CreateProfileController());
    this.loginView = new LoginView();
  }

  public async render(): Promise<void> {
    this.console.printString("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.console.printString("[UIVIEW] - Please, choose the option you want to perform [1/2]:");

    let option = await this.console.readString(
      [
        "1- Create a profile",
        "2- Login with an existing profile"
      ]
    );

    while (option !== "1" && option !== "2") {
      this.console.printString("[UIVIEW] - Wrong input selected. Please, choose again [1/2]:");
      option = await this.console.readString(
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
