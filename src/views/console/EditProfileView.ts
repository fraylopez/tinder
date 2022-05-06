import { EditProfileController } from "../../controllers/EditProfileController";
import { GetProfileController } from "../../controllers/GetProfileController";
import { Profile } from "../../models/Profile";
import { ProfilePrimitives } from "../../models/ProfilePrimitives";
import { ConsoleView } from "./ConsoleView";

export class EditProfileView extends ConsoleView {
  constructor(
    private getProfileController: GetProfileController,
    private editProfileController: EditProfileController
  ) {
    super();
  }

  public async render(): Promise<void> {
    this.console.print("[Edit PROFILE]");

    let profile: Profile;
    let actualName: string;
    do {
      actualName = await this.console.read(["Enter existing name:"]);
      profile = this.getProfileController.control(actualName);
    } while (!profile);

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
    profile.updateWithPrimitives(profilePrimitives);

    this.editProfileController.control(actualName, profile);
  }
}
