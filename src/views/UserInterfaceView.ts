import { createInterface } from "readline";
import { CreateProfileView } from "./CreateProfileView";
import { LoginView } from "./LoginView";

export class UserInterfaceView {
  private createProfileView: CreateProfileView;
  private loginView: LoginView;
  constructor() {
    this.createProfileView = new CreateProfileView();
    this.loginView = new LoginView();
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
    console.log("[WELCOME TO TINDER]");

    let option = await this.readString(
      "Please, choose the option you want to perform [1/2]:\n 1- Create a profile \n 2-Login with an existing profile \n"
    );

    while (option !== "1" && option !== "2") {
      option = await this.readString(
        "Wrong input selected. Please, choose the option you want to perform [1/2]:\n 1- Create a profile \n 2-Login with an existing profile \n"
      );
    }
    if (option === "1") {
      this.createProfileView.render();
    } else {
      this.loginView.render();
    }
  }
}
