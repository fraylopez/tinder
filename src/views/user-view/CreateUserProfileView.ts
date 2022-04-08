import { CreateProfileController } from "../../controllers/CreateProfileController";
import { BetaConsole } from "../../utils/BetaConsole";

export class CreateUserProfileView {
  private controller: CreateProfileController;
  constructor() {
    this.controller = new CreateProfileController();
  }

  public async render(): Promise<void> {
    const betaConsole = new BetaConsole();

    betaConsole.print("Creating profile\n");
    const name = await betaConsole.readString("Name: ");
    const age = await betaConsole.readNumber("Age: ");

    this.controller.control(name, age);
  }
}
