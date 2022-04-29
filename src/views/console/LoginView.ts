import { LoginController } from "../../controllers/LoginController";
import { ConsoleView } from "./ConsoleView";

export class LoginView extends ConsoleView {
  private loginController: LoginController;
  constructor() {
    super();
    this.loginController = new LoginController();
  }

  public async render(): Promise<void> {
    this.console.print("[LOGIN]");
    var logged = false;
    do {
      let name = await this.console.read(["Enter your name to login:"]);
      logged = this.loginController.control(name);
      if (!logged) {
        this.console.print("Wrong name, try again");
      }
    } while (!logged);
    this.console.print(`Logged in 🐥`);
  }
}
