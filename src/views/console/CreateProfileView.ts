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
    this.printString("[CREATE PROFILE]");
    const name = await this.readString(["1- Enter your name:"]);
    const age = await this.readString(["2- Enter your age:"]);
    const gender = await this.readString(
      ["3- Enter your gender [male/female]:"]
    );

    try {
      this.createProfileController.control(name, Number(age), gender);
    } catch (error) {
      if(error instanceof UnderAgeError) {
        console.log("Controled under age user");
      }
    }

  }
}
