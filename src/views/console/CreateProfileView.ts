import { CreateProfileController } from "../../controllers/CreateProfileController";
import { UnderAgeError } from "../../models/UnderAgeError";
import { ConsoleView } from "./ConsoleView";

export class CreateProfileView extends ConsoleView {
  private createProfileController: CreateProfileController;

  constructor() {
    super();
    this.createProfileController = new CreateProfileController();
  }

  public async render(): Promise<void> {
    this.console.print("[CREATE PROFILE]");
    const name = await this.console.read(["1- Enter your name:"]);
    const age = await this.console.read(["2- Enter your age:"]);
    const gender = await this.console.read(
      ["3- Enter your gender [male/female]:"]
    );

    try {
      this.createProfileController.control(name, Number(age), gender);
    } catch (error) {
      if(error instanceof UnderAgeError) {
        this.console.print("Controled under age user");
      }
    }

  }
}
