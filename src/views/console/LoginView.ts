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
    this.console.printString("[LOGIN]");
    var logged = false;
    do {
      let name = await this.console.readString(["Enter your name to login:"]);
      logged = this.loginController.control(name);
      if(!logged) {
        this.console.printString("Wrong name, try again");
    }
    }
    while (!logged);
    console.log(`Logged in :pikachu_dancing:`);
  }
}
