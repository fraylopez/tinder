import { GetUserController } from "../../../../server/controllers/GetUserController";
import { ConsoleView } from "../ConsoleView";
import { ProfileView } from "./ProfileView";

export class GetUserView extends ConsoleView {
  constructor(private controller: GetUserController) {
    super();
  }

  public render(): void {
    const name = this.console.readString("What profile do you want to get? (Name)");
    const user = this.controller.control(name);
    if (user) {
      new ProfileView(user.getProfile()).render();
    } else {
      this.console.write("profile not found :/");
    }
  }
}
