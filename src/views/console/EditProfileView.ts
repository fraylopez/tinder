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
    this.console.print("[Edit PROFILE]");

    const existingName = await this.console.read(["Enter existing name:"]);

    const name = await this.console.read(["Enter new name:"]);
    const age = await this.console.read(["Enter new age:\n"]);
    const gender = await this.console.read([
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
