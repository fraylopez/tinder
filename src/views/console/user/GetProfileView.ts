import { ProfileController } from "../../../controllers/state/ProfileController";
import { ConsoleView } from "../ConsoleView";
import { ProfileView } from "./ProfileView";
import { GetProfileController } from "../../../controllers/GetProfileController";
import { Controller } from "../../../controllers/Controller";
import { Profile } from "../../../models/Profile";

export class GetProfileView extends ConsoleView {
  constructor(private profileView: ProfileView, private controller: Controller<[name: string], Profile | null>) {
    super();
  }

  public render(): void {
    const name = this.console.readString("What profile do you want to get? (Name)");
    const profile = this.controller.control(name);
    if (profile) {
      this.profileView.render(profile);
    } else {
      this.console.writeInln("profile not found :/");
    }
  }
}
