import { SwippingController } from "../../../controllers/SwipingController";
import { Profile } from "../../../models/Profile";
import { SwipeDirection } from "../../../models/SwipeDirection";
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
    new ProfileView(this.candidate).render();
    const direction = this.askForDirection();
    this.controller.control(direction, this.candidate);
  }

  private askForDirection(): SwipeDirection {
    const right: boolean = this.console.yesNoDialog("righ or left");
    if (right) {
      return SwipeDirection.Right;
    }
    return SwipeDirection.Left;
  }
}
