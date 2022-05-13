import { SwippingController } from "../../../controllers/SwipingController";
import { Profile } from "../../../models/Profile";
import { ConsoleView } from "../ConsoleView";

export class CandidateView extends ConsoleView {
  constructor(private controller: SwippingController) {
    super();
  }

  public render(candidate: Profile) {
    const like: boolean = this.console.yesNoDialog("righ or left");
    this.controller.control(like, candidate);
  }
}
