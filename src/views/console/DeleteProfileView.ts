import { createInterface } from "readline";
import { DeleteProfileController } from "../../controllers/DeleteProfileController";

export class DeleteProfileView {
  private readonly controller: DeleteProfileController;

  constructor() {
    this.controller = new DeleteProfileController();
  }

  private async readString(msg: string): Promise<string> {
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
    const name = await this.readString("Enter your name:\n");
    const confirmed = await this.readString("Are you sure? [y/n]:\n");
    const wasDeleted = this.controller.control(name, confirmed === "y");
    if (wasDeleted) {
      console.log("Profile deleted!");
    } else {
      console.log("Profile not deleted!");
    }
  }
}