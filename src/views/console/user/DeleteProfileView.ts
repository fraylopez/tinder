import { ProfileStateController } from "../../../controllers/state/ProfileStateController";
import { ConsoleView } from "../ConsoleView";

export class DeleteProfileView extends ConsoleView {
  constructor(private readonly controller: ProfileStateController) {
    super();
  }

  public render(): void {
    this.console.write("Delete profile");
    if (this.console.yesNoDialog("Are you sure? [y/n]:")) {
      this.controller.deleteProfile();
      console.log("Profile deleted!");
    } else {
      console.log("Profile not deleted!");
    }
  }
}
