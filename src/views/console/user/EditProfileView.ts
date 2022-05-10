import { ProfileController } from "../../../controllers/ProfileController";
import { ProfilePrimitives } from "../../../models/ProfilePrimitives";
import { ConsoleView } from "../ConsoleView";

export class EditProfileView extends ConsoleView {
  constructor(private editProfileController: ProfileController) {
    super();
  }

  public render(): void {
    this.console.writeInln("EDIT PROFILE");
    const existingName = this.console.readString("Enter existing name:");
    const name = this.console.readString("Enter new name:");
    const age = this.console.readInt("Enter new age:");
    const gender = this.console.readString("Enter your new gender [male/female]:");
    const profilePrimitives: ProfilePrimitives = {
      name,
      age: Number(age),
      gender,
    };
    this.editProfileController.edit(existingName, profilePrimitives);
  }
}
