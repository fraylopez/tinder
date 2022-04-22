import { createInterface } from "readline";
import { CreateProfileView } from "./CreateProfileView";
import { DeleteProfileView } from "./DeleteProfileView";
import { LoginView } from "./LoginView";

export class InitialView {
  private createProfileView: CreateProfileView;
  private deleteProfileView: DeleteProfileView;
  private loginView: LoginView;
  constructor() {
    this.createProfileView = new CreateProfileView();
    this.deleteProfileView = new DeleteProfileView();
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
    console.log("\n[UIVIEW] - [WELCOME TO TINDER🔥]\n\n");

    let option = await this.readString(
      `[UIVIEW] - Please, choose the option you want to perform [1/2]:
        1- Create a profile
        2- Login with an existing profile
        3- Delete an existing profile
      `
    );

    while (option !== "1" && option !== "2" && option !== "3") {
      option = await this.readString(
        "\n[UIVIEW] - Wrong input selected. \n\n Please, choose the option you want to perform [1/2]:\n\n 1- Create a profile \n 2- Login with an existing profile \n\n"
      );
    }
    if (option === "1") {
      this.createProfileView.render();
    } else if (option === "2"){
      this.loginView.render();
    } else {
      this.deleteProfileView.render();
    }
  }
}
