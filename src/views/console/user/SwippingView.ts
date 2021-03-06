import { SwippingStateController } from "../../../controllers/state/SwippingStateController";
import { Profile } from "../../../models/Profile";
import { SwipeDirection } from "../../../models/SwipeDirection";
import { ConsoleView } from "../ConsoleView";
import { ProfileView } from "./ProfileView";

export class SwippingView extends ConsoleView {
  constructor(private readonly controller: SwippingStateController) {
    super();
  }

  public render(candidate: Profile) {
    new ProfileView(candidate).render();
    const direction = this.askForDirection();
    this.controller.swipe(direction, candidate);
  }

  private askForDirection(): SwipeDirection {
    const right: boolean = this.console.yesNoDialog("righ? (Y/N)");
    if (right) {
      return SwipeDirection.Right;
    }
    return SwipeDirection.Left;
  }
}
