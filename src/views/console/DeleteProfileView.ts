import { createInterface } from "readline";
import { DeleteProfileController } from "../../controllers/DeleteProfileController";

export class deleteProfileView {
  private deleteProfileController: DeleteProfileController;
  constructor() {
    this.deleteProfileController = new DeleteProfileController();
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
    console.log("\n\n[DELETE PROFILE]\n");

    const name = await this.readString("1- Enter your name:\n");

    this.deleteProfileController.control(name);
  }
}
