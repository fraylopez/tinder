import { LoginController } from "../../controllers/LoginController";
import { Console } from "./Console";
import { EditProfileView } from "./EditProfileView";

export class LoginView {

  private console: Console;
  private editProfileView: EditProfileView;
  private loginController: LoginController;

  constructor() {
    this.console = new Console();
    this.loginController = new LoginController();
    this.editProfileView = new EditProfileView();
  }

  public async render(): Promise<void> {
    await this.loginAction();
    await this.askForNextAction();
  }

  private async loginAction() {
    this.console.printString("[LOGIN]");
    var logged = false;
    do {
      let name = await this.console.readString(["Enter your name to login:"]);
      logged = this.loginController.control(name);
      if(!logged) {
        this.console.printString("Wrong name, try again");
      }
    }
    while (!logged);
    console.log(`Logged in :pikachu_dancing:`);
  }

  private async askForNextAction() {
    let option = await this.console.readString([
      "",
      "[UIVIEW] - Please, choose the option you want to perform [1]:",
      "",
      "1- Edit profile"
    ]);

    while (option !== "1") {
      option = await this.console.readString([
        "[UIVIEW] - Wrong input selected.",
        "Please, choose the option you want to perform [1]:",
        "1- Edit profile"
      ]);
    }

    this.editProfileView.render();
  }
}
