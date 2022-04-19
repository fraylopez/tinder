import { createInterface } from "readline";
import { LoginController } from "../../controllers/LoginController";

export class LoginView {
  private loginController: LoginController;
  constructor() {
    this.loginController = new LoginController();
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
    console.log("\n[LOGIN]\n\n");

    let name = await this.readString("\nEnter your name to login:\n");
    while(!this.loginController.control(name)) {
      console.log("wrong credentials");
      name = await this.readString("\nEnter your name to login:\n");
    }
    console.log(`Logged in :pikachu_dancing:`);
  }
}
