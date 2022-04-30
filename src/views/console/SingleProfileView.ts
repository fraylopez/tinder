import { Profile } from "../../models/Profile";

// TODO: can we remove this class ?
class SingleProfileView {
  console: any;
  public async render(profile: Profile): Promise<void> {
    this.console.print("PROFILE:");
    this.console.print(`Name: ${profile.getName()}`);
    this.console.print(`Age: ${profile.getAge()}`);
    this.console.print(`Gender: ${profile.getGender()}`);

    this.console.print(
      "[UIVIEW] - Please, choose the option you want to perform [1/2]:"
    );
    const options = ["1- Edit", "2- Delete"];
    let option = await this.console.read(options);

    while (option !== "1" && option !== "2") {
      this.console.print(
        "[UIVIEW] - Wrong input selected. Please, choose again [1/2]:"
      );
      option = await this.console.read(options);
    }
    if (option === "1") {
      throw new Error("EditProfileNotImplemented");
      // Call editProfileView with current profile
    } else if (option === "2") {
      throw new Error("DeleteProfileNotImplemented");
    }
  }
}
