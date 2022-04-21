import { CreateProfileView } from "./CreateProfileView";
import { InAppView } from "./InAppView";
import { LoginView } from "./LoginView";
import { WithConsoleView } from "./WithConsoleView";

export class InitialView extends WithConsoleView {
  private createProfileView: CreateProfileView;
  private loginView: LoginView;
  private inAppView: InAppView;

  constructor() {
    super();
    this.createProfileView = new CreateProfileView();
    this.loginView = new LoginView();
    this.inAppView = new InAppView();
  }

  public async render(): Promise<void> {
    this.console.print("WELCOME TO TINDER🔥]\nPlease, choose the option you want to perform [1/2]:\n");
    let option = await this.console.readString("1- Create a profile\n2- Login with an existing profile\n");

    while (option !== "1" && option !== "2") {
      this.console.print("Wrong input selected. Please, choose again [1/2]:\n");
      option = await this.console.readString("1- Create a profile\n2- Login with an existing profile\n");
    }
    if (option === "1") {
      this.createProfileView.render();
    } else {
      await this.loginView.render();
      await this.inAppView.render();
    }
  }
}
