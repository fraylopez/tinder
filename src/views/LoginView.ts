import { createInterface } from "readline";
import { LoginController } from "../controllers/LoginController";

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
    console.log("[LOGIN]");

    const name = await this.readString("Enter your name to login:\n");
    this.loginController.control(name);
  }
}
