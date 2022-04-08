import { GetProfileController } from "../../controllers/GetProfileController";
import { BetaConsole } from "../../utils/BetaConsole";

export class GetUserProfileView {
  private controller: GetProfileController;
  constructor() {
    this.controller = new GetProfileController();
  }

  public async render(): Promise<void> {
    const betaConsole = new BetaConsole();

    betaConsole.print("Loggin in\n");
    const name = await betaConsole.readString("What's your name? ");
    try {
      const profile = this.controller.control(name);
      betaConsole.print(
        `${profile.getName()}, you have been successfully logged in!`
      );
    } catch (error) {
      if ((error as Error).message) {
        betaConsole.print(`${(error as Error).message}`);
      } else {
        betaConsole.print(`${error}`);
      }
    }
  }
}
