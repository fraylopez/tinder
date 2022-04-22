import { CreateProfileController } from "../../controllers/CreateProfileController";
import { UnderAgeError } from "../../models/UnderAgeError";
import { Console } from "./Console";

export class CreateProfileView {
  private createProfileController: CreateProfileController;
  private console: Console;

  constructor() {
    this.createProfileController = new CreateProfileController();
    this.console = new Console();
  }

  public async render(): Promise<void> {
    this.console.printString("[CREATE PROFILE]");
    const name = await this.console.readString(["1- Enter your name:"]);
    const age = await this.console.readString(["2- Enter your age:"]);
    const gender = await this.console.readString(
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
