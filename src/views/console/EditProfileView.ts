import { EditProfileController } from "../../controllers/EditProfileController";
import { Console } from "./Console";
import { ProfilePrimitives } from "../../models/ProfilePrimitives";
import { GetProfileController } from "../../controllers/GetProfileController";

export class EditProfileView {

  private console: Console;

  constructor(
    private editProfileController: EditProfileController,
  ) {
    this.console = new Console();
  }

  public async render(): Promise<void> {
    console.log("\n\n[Edit PROFILE]\n");

    const existingName = await this.console.readString(["Enter existing name:"]);

    const name = await this.console.readString(["Enter new name:"]);
    const age = await this.console.readString(["Enter new age:\n"]);
    const gender = await this.console.readString([
      "Enter your new gender [male/female]:\n",
    ]);

    const profileDTO: ProfilePrimitives = {
      name,
      age: Number(age),
      gender,
    };

    this.editProfileController.control(existingName, profileDTO);
  }
}
