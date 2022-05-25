import { LoginController } from "../../../controllers/LoginController";
import { ConsoleView } from "../ConsoleView";

export class LoginView extends ConsoleView {
  constructor(private controller: LoginController) {
    super();
  }

  public render(): void {
    this.console.writeln("LOGIN");
    let logged = false;
    do {
      const name = this.console.readString("Enter your name to login:");
      logged = this.controller.control(name);
      if (!logged) {
        this.console.writeln("Wrong name, try again");
      }
    } while (!logged);
    this.console.writeln(`Logged in 🐥`);
  }
}
