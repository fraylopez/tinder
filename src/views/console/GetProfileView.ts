import { GetProfileController } from "../../controllers/GetProfileController";
import { ConsoleView } from "./ConsoleView";
import { ProfileView } from "./ProfileView";

export class GetProfileView extends ConsoleView {
  private profileView: ProfileView;

  constructor(private controller: GetProfileController) {
    super();
    this.profileView = new ProfileView();
  }

  public render(): void {
    let name = this.console.readString("What profile do you want to get? (Name)");
    const profile = this.controller.control(name);
    // this.profileView.render(profile);
  }
}
