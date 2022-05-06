import { ConsoleView } from "../ConsoleView";
import { DeleteProfileController } from "../../../controllers/DeleteProfileController";
import { ProfileController } from "../../../controllers/ProfileController";

export class DeleteProfileView extends ConsoleView {
  constructor(private readonly controller: ProfileController) {
    super();
  }

  public render(): void {
    this.console.writeInln("DELETE PROFILE");
    const name = this.console.readString("Enter your name:");
    if (this.console.yesNoDialog("Are you sure? [y/n]:")) {
      this.controller.delete(name);
      console.log("Profile deleted!");
    } else {
      console.log("Profile not deleted!");
    }
  }
}
