import { LoginController } from "../../controllers/LoginController";
import { ConsoleView } from "./ConsoleView";

export class LoginView extends ConsoleView {

  private loginController: LoginController;
  constructor() {
    super();
    this.loginController = new LoginController();
  }

  public async render(): Promise<void> {
    this.printString("[LOGIN]");
    var logged = false;
    do {
      let name = await this.readString(["Enter your name to login:"]);
      logged = this.loginController.control(name);
      if(!logged) {
        this.printString("Wrong name, try again");
      }
    }
    while (!logged);
    this.printString(`Logged in :pikachu_dancing:`);
  }
}
