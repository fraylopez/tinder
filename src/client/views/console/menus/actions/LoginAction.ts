import { InitialStateController } from "../../../../../server/controllers/state/InitialStateController";
import { Session } from "../../../../../server/models/Session";
import { ConsoleView } from "../../ConsoleView";
import { LoginView } from "../../user/LoginView";
import { IMenuItemAction } from "./IMenuItemAction";

export class LoginAction extends ConsoleView implements IMenuItemAction {
  constructor(private readonly session: Session, private readonly controller: InitialStateController) {
    super();
  }

  execute(): void {
    const loginView = new LoginView(this.controller);
    do {
      loginView.render();
      if (!this.session.isLoggedIn()) {
        this.console.writeln("Wrong name, try again.");
      }
    } while (!this.session.isLoggedIn());

    this.console.writeln(`Logged in 🐥`);
  }
}
