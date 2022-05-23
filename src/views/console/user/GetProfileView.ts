import { GetProfileController } from "../../../controllers/GetProfileController";
import { ConsoleView } from "../ConsoleView";
import { ProfileView } from "./ProfileView";

export class GetProfileView extends ConsoleView {
  constructor(private profileView: ProfileView, private controller: GetProfileController) {
    super();
  }

  public render(): void {
    const name = this.console.readString("What profile do you want to get? (Name)");
    const profile = this.controller.control(name);
    if (profile) {
      this.profileView.render(profile);
    } else {
      this.console.write("profile not found :/");
    }
  }
}
