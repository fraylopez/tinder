/* eslint-disable max-classes-per-file */
import { InitialController } from "../../../controllers/state/StateControllers";
import { CreateProfileView } from "../user/CreateProfileView";
import { LoginView } from "../user/LoginView";
import { Menu } from "../Menu";
import { StateView } from "./StateView";

export class InitialView extends StateView {
  private loginView: LoginView;
  private createProfileView: CreateProfileView;

  constructor(controller: InitialController) {
    super(controller);
    this.loginView = new LoginView(controller.getLoginController());
    this.createProfileView = new CreateProfileView(controller.getCreateProfileController());
  }

  render(): void {
    this.console.writeln("WELCOME TO TINDER🔥");

    const menu = new Menu([
      "Create a profile",
      "Login with an existing profile",
    ]);

    const option = menu.execute();
    switch (option) {
      case 1:
        this.createProfile();
        break;
      case 2:
        this.login();
        break;
    }
  }

  private login(): void {
    this.loginView.render();
  }

  private createProfile(): void {
    this.createProfileView.render();
  }
}
