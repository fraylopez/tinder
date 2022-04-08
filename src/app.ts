import { BetaConsole } from "./utils/BetaConsole";
import { CreateUserProfileView } from "./views/user-view/CreateUserProfileView";
import { GetUserProfileView } from "./views/user-view/GetUserProfileView";

export class Tinder {
  private getUserProfileView: GetUserProfileView;
  private createUserProfileView: CreateUserProfileView;

  constructor() {
    this.createUserProfileView = new CreateUserProfileView();
    this.getUserProfileView = new GetUserProfileView();
  }

  public async render(): Promise<void> {
    const betaConsole = new BetaConsole();
    const isCreateProfile =
      (await betaConsole.readString(
        "Do you want to create a profile? (y/n) \n"
      )) === "y"
        ? true
        : false;

    if (isCreateProfile) {
      await this.createUserProfileView.render();
    } else {
      await this.getUserProfileView.render();
    }
  }
}

new Tinder().render();
