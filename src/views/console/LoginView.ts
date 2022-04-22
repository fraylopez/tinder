import { createInterface } from "readline";
import { LoginController } from "../../controllers/LoginController";
import { Console } from "./Console";
import { InAppView } from "./InAppView";

export class LoginView {
  private console: Console;
  private loginController: LoginController;
  private inAppView: InAppView;
  constructor() {
    this.loginController = new LoginController();
    this.inAppView = new InAppView();
    this.console = new Console();
  }

  public async render(): Promise<void> {
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
    this.inAppView.render();
  }
}
