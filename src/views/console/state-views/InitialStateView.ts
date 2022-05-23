import { InitialStateController } from "../../../controllers/state/InitialStateController";
import { Session } from "../../../models/Session";
import { CreateProfileView } from "../user/CreateProfileView";
import { LoginView } from "../user/LoginView";
import { StateView } from "./StateView";

export class InitialStateView extends StateView {
  private loginView: LoginView;
  private createProfileView: CreateProfileView;

  constructor(session: Session) {
    const controller = new InitialStateController(session);
    super(session, controller);
    this.loginView = new LoginView(controller);
    this.createProfileView = new CreateProfileView(controller);
  }

  render(): void {
    this.console.writeln(`this is initial view with controller ${this.controller.constructor.name}`);

    this.console.writeln("WELCOME TO TINDER🔥");
    this.console.writeln("Please, choose the option you want to perform [1/4]:");
    const options = ["Create a profile", "Login with an existing profile"];
    let option: number;
    do {
      option = this.console.readInt(options);
      switch (option) {
        case 1:
          this.createProfile();
          break;
        case 2:
          this.login();
          break;
        default:
          this.console.writeln("Wrong input selected. Please, choose again [1/4]:");
      }
    } while (option !== 4);
  }

  private login(): void {
    do {
      this.loginView.render();
      if (!this.session.isLoggedIn()) {
        this.console.writeInln("Wrong name, try again");
      }
    } while (this.session.isLoggedIn());

    this.console.writeInln(`Logged in 🐥`);
  }

  private createProfile(): void {
    this.createProfileView.render();
  }
}
