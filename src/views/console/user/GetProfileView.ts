import { ConsoleView } from "../ConsoleView";
import { ProfileView } from "./ProfileView";
import { GetProfileController } from "../../../controllers/GetProfileController";

export class GetProfileView extends ConsoleView {
  constructor(
    private profileView: ProfileView,
    private controller: GetProfileController,
  ) {
    super();
  }

  public render(): void {
    let name = this.console.readString("What profile do you want to get? (Name)");
    const profile = this.controller.control(name);
    this.profileView.render(profile);
  }
}
