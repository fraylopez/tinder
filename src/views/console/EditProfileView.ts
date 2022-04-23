import { EditProfileController } from "../../controllers/EditProfileController";
import { ProfilePrimitives } from "../../models/ProfilePrimitives";
import { ConsoleView } from "./ConsoleView";

export class EditProfileView extends ConsoleView {

  constructor(
    private editProfileController: EditProfileController,
  ) {
    super();
  }

  public async render(): Promise<void> {
    console.log("\n\n[Edit PROFILE]\n");

    const existingName = await this.readString(["Enter existing name:"]);

    const name = await this.readString(["Enter new name:"]);
    const age = await this.readString(["Enter new age:\n"]);
    const gender = await this.readString([
      "Enter your new gender [male/female]:\n",
    ]);

    const profilePrimitives: ProfilePrimitives = {
      name,
      age: Number(age),
      gender,
    };

    this.editProfileController.control(existingName, profilePrimitives);
  }
}
