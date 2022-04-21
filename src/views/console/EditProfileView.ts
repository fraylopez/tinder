import { createInterface } from "readline";
import { EditProfileController } from "../../controllers/EditProfileController";
import { Profile } from "../../models/Profile";

export class EditProfileView {

  private editProfileController: EditProfileController;

  constructor() {
    this.editProfileController = new EditProfileController();
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
    console.log("\n\n[Edit PROFILE]\n");

    const ENTER_YOUR_EXISTING_NAME_STR = "1- Enter your existing name:\n";

    let existingName = await this.readString(ENTER_YOUR_EXISTING_NAME_STR);
    let profileExists = false;
    while (profileExists === false) {
      profileExists = await this.editProfileController.profileExistsByName(existingName)

      if( profileExists === false ) {
        console.log("Profile dont exists\n");
        existingName = await this.readString(ENTER_YOUR_EXISTING_NAME_STR);
      }
    }

    const name = await this.readString("1- Enter new name:\n");
    const age = await this.readString("2- Enter new age:\n");
    const gender = await this.readString(
      "3- Enter your new gender [male/female]:\n"
    );

    // TODO: 4 Parameters, check how to refactor, because VIEW cant know the model Profile
    this.editProfileController.editProfileData(existingName, name, Number(age), gender);
  }
}
