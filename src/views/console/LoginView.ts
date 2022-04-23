import { LoginController } from "../../controllers/LoginController";
import { Console } from "./Console";

export class LoginView {

  private console: Console;

  constructor(
    private controller: LoginController,
  ) {
    this.console = new Console();
  }

  public async render(): Promise<void> {
    this.console.printString("[LOGIN]");
    var logged = false;
    do {
      let name = await this.console.readString(["Enter your name to login:"]);
      logged = this.controller.control(name);
      if(!logged) {
        this.console.printString("Wrong name, try again");
      }
    }
    while (!logged);
    console.log(`Logged in :pikachu_dancing:`);
  }
}
