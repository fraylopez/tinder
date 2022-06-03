import { SwippingController } from "../../../controllers/SwipingController";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { ConsoleView } from "../ConsoleView";
import { ProfileView } from "./ProfileView";

export class SwippingView extends ConsoleView {
  private readonly controller: SwippingController;

  constructor(user: User, private readonly candidate: Profile) {
    super();
    this.controller = new SwippingController(user);
  }

  public render() {
    new ProfileView().render(this.candidate);
    const direction: boolean = this.console.yesNoDialog("righ or left");
    this.controller.control(direction, this.candidate);
  }
}
