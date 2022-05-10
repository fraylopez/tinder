import { ProfileController } from "../../../controllers/ProfileController";
import { ConsoleView } from "../ConsoleView";
import { ProfileView } from "./ProfileView";

export class GetProfileView extends ConsoleView {
  constructor(private profileView: ProfileView, private controller: ProfileController) {
    super();
  }

  public render(): void {
    const name = this.console.readString("What profile do you want to get? (Name)");
    const profile = this.controller.get(name);
    if (profile) {
      this.profileView.render(profile);
    } else {
      this.console.writeInln("profile not found :/");
    }
  }
}
