import { GetProfileController } from "../../controllers/GetProfileController";
import { Console } from "./Console";
import { ProfileView } from "./ProfileView";

export class GetProfileView {
  private controller: GetProfileController;
  private console: Console;

  constructor() {
    this.controller = new GetProfileController();
    this.console = new Console();
  }

  public async render(): Promise<void> {
    let name = await this.console.readString([
      "What profile do you want to get? (Name)",
    ]);
    const profile = this.controller.control(name);
    new ProfileView(profile).render();
  }
}
