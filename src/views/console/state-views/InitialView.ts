/* eslint-disable max-classes-per-file */
import { InitialController, StateController } from "../../../controllers/StateControllers";
import { UserController } from "../../../controllers/UserController";
import { ConsoleView } from "../ConsoleView";
import { CreateProfileView } from "../user/CreateProfileView";
import { LoginView } from "../user/LoginView";
import { StateView } from "./StateView";

// class Menu extends ConsoleView {
//   constructor(private options: string[]) {}
//   render() {
//     for (let i = 1; i <= this.options.length; i++) {
//       const element = this.options[i];
//       this.console.writeln()

//     }
//   }
// }

export class InitialView extends StateView {
  private loginView: LoginView;
  private createProfileView: CreateProfileView;

  constructor(controller: InitialController) {
    super(controller);
    this.loginView = new LoginView(controller.getLoginController());
    this.createProfileView = new CreateProfileView(controller.getCreateProfileController());
  }

  render(): void {
    this.console.writeln(`this is initial view with controller ${this.controller.constructor.name}`);

    this.console.writeln("WELCOME TO TINDER🔥");
    this.console.writeln("Please, choose the option you want to perform [1/4]:");
    const options = [
      "Create a profile",
      "Login with an existing profile",
    ];
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
    this.loginView.render();
  }

  private createProfile(): void {
    this.createProfileView.render();
  }
}
