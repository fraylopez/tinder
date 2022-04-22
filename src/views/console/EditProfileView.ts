import { EditProfileController } from "../../controllers/EditProfileController";
import { LoginController } from "../../controllers/LoginController";
import { Console } from "./Console";
import { ProfilePrimitives } from "../../models/ProfilePrimitives";

export class EditProfileView {
  private editProfileController: EditProfileController;
  private loginController: LoginController;
  private console: Console;

  constructor() {
    this.console = new Console();
    this.loginController = new LoginController();
    this.editProfileController = new EditProfileController();
  }

  public async render(): Promise<void> {
    console.log("\n\n[Edit PROFILE]\n");

    // TODO: When we have session, this line is not correct, its better use session, not asking
    const existingName = await this.askForNameAndCheckIfExists();

    const name = await this.console.readString(["1- Enter new name:"]);
    const age = await this.console.readString(["2- Enter new age:\n"]);
    const gender = await this.console.readString([
      "3- Enter your new gender [male/female]:\n",
    ]);

    const profileDTO: ProfilePrimitives = {
      name,
      age: Number(age),
      gender,
    };

    this.editProfileController.control(existingName, profileDTO);
  }

  private async askForNameAndCheckIfExists(): Promise<string> {
    const ENTER_YOUR_EXISTING_NAME_STR = "1- Enter your existing name:\n";
    let existingName = await this.console.readString([
      ENTER_YOUR_EXISTING_NAME_STR,
    ]);
    let profileExists = false;
    while (profileExists === false) {
      profileExists = await this.loginController.control(existingName);

      if (profileExists === false) {
        console.log("Profile dont exists\n");
        existingName = await this.console.readString([
          ENTER_YOUR_EXISTING_NAME_STR,
        ]);
      }
    }

    return existingName;
  }
}
