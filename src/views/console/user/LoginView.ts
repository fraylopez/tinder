import { InitialStateController } from "../../../controllers/state/InitialStateController";
import { ConsoleView } from "../ConsoleView";

export class LoginView extends ConsoleView {
  constructor(private controller: InitialStateController) {
    super();
  }

  public render(): void {
    this.console.writeln("LOGIN");

    let isValidCredentials = false;
    do {
      const name = this.console.readString("Enter your name to login:");
      isValidCredentials = this.controller.login(name);
      if(!isValidCredentials) {
        this.console.writeln("Wrong name, try again");
      }
    } while (!isValidCredentials);

    this.console.writeln(`Logged in 🐥`);
  }
}
