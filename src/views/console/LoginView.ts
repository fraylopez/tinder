import { createInterface } from "readline";
import { LoginController } from "../../controllers/LoginController";
import { EditProfileView } from "./EditProfileView";

export class LoginView {

  private editProfileView: EditProfileView;
  private loginController: LoginController;
  private name: string | null = null;

  constructor() {
    this.loginController = new LoginController();
    this.editProfileView = new EditProfileView();
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
    await this.loginAction();
    await this.askForNextAction();
  }

  private async loginAction() {
    console.log("\n[LOGIN]\n\n");

    this.name = await this.readString("\nEnter your name to login:\n");
    while(!this.loginController.control(this.name)) {
      console.log("wrong credentials");
      this.name = await this.readString("\nEnter your name to login:\n");
    }
    console.log(`Logged in :pikachu_dancing:\n`);
  }

  private async askForNextAction() {
    let option = await this.readString(`[UIVIEW] - Please, choose the option you want to perform [1]:\n\n1- Update profile \n\n`);

    while (option !== "1") {
      option = await this.readString(
        "\n[UIVIEW] - Wrong input selected. \n\n Please, choose the option you want to perform [1]:\n\n 1- Update profile \n\n"
      );
    }

    this.editProfileView.render();
  }
}
