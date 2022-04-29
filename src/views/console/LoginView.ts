import { LoginController } from "../../controllers/LoginController";
import { ConsoleView } from "./ConsoleView";

export class LoginView extends ConsoleView {
  constructor(private controller: LoginController) {
    super();
  }

  public async render(): Promise<void> {
    this.console.print("[LOGIN]");
    var logged = false;
    do {
      let name = await this.console.read(["Enter your name to login:"]);
      logged = this.controller.control(name);
      if (!logged) {
        this.console.print("Wrong name, try again");
      }
    } while (!logged);
    this.console.print(`Logged in 🐥`);
  }
}
