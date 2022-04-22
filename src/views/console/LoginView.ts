import { createInterface } from "readline";
import { LoginController } from "../../controllers/LoginController";
import { Profile } from "../../models/Profile";

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

  public async render(): Promise<Profile> {
    console.log("\n[LOGIN]\n\n");

    let profile: Profile | null = null;
    do {
      const name = await this.readString("\nEnter your name to login:\n");
      profile = this.loginController.control(name);
    } while(!profile);
    console.log(`Logged in :pikachu_dancing:`);
    return profile;
  }
}
