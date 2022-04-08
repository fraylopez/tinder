import { createInterface } from "readline";
import { CreateProfileController } from "../controllers/CreateProfileController";

export class CreateProfileView {
  private createProfileController: CreateProfileController;
  constructor() {
    this.createProfileController = new CreateProfileController();
  }

  public async readString(msg: string): Promise<string> {
    const rl = createInterface(process.stdin, process.stdout);
    return new Promise<string>((res, rej) => {
      rl.question(msg, (input) => {
        // check input?
        res(input);
        rl.close();
      });
    });
  }

  public async render(): Promise<void> {
    console.log("\n\n[CREATE PROFILE]\n");

    const name = await this.readString("1- Enter your name:\n");
    const age = await this.readString("2- Enter your age:\n");
    const gender = await this.readString(
      "3- Enter your gender [male/female]:\n"
    );

    this.createProfileController.control(name, Number(age), gender);
  }
}
