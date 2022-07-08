import { InitialStateController } from "../../../controllers/state/InitialStateController";
import { ConsoleView } from "../ConsoleView";

export class LoginView extends ConsoleView {
  constructor(private controller: InitialStateController) {
    super();
  }

  public render(): void {
    this.console.writeln("LOGIN");
    const name = this.console.readString("Enter your password: ");
    this.controller.login(name);
  }
}
