import { LoginController } from "../../../controllers/LoginController";
import { ConsoleView } from "../ConsoleView";

export class LoginView extends ConsoleView {
  constructor(
    private controller: LoginController,
  ) {
    super();
  }

  public render(): void {
    this.console.writeInln("LOGIN");
    var logged = false;
    do {
      let name = this.console.readString("Enter your name to login:");
      logged = this.controller.control(name);
      if (!logged) {
        this.console.writeInln("Wrong name, try again");
      }
    } while (!logged);
    this.console.writeInln(`Logged in 🐥`);
  }
}
