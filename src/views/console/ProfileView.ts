import { GetProfileController } from "../../controllers/GetProfileController";
import { Profile } from "../../models/Profile";
import { ConsoleView } from "./ConsoleView";

export class ProfileView extends ConsoleView {

  public async render(profile: Profile): Promise<void> {
    console.log("PROFILE:")
    console.log(`Name: ${profile.getName()}`);
    console.log(`Age: ${profile.getAge()}`);
    console.log(`Gender: ${profile.getGender()}`);

    this.printString("[UIVIEW] - Please, choose the option you want to perform [1/2]:");
    const options = [
      "1- Edit",
      "2- Delete",
    ]
    let option = await this.readString(
      options
    );

    while (option !== "1" && option !== "2") {
      this.printString("[UIVIEW] - Wrong input selected. Please, choose again [1/2]:");
      option = await this.readString(
        options
      );
    }
    if (option === "1") {
      throw new Error("EditProfileNotImplemented");
      // Call editProfileView with current profile
    } else if (option === "2") {
      throw new Error("DeleteProfileNotImplemented")
    }
  }
}
