import { SwippingController } from "../../../controllers/SwipingController";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { ConsoleView } from "../ConsoleView";

export class CandidateView extends ConsoleView {
  private readonly controller: SwippingController;

  constructor(private user: User, private readonly candidate: Profile) {
    super();
    this.controller = new SwippingController(user);
  }

  public render() {
    const like: boolean = this.console.yesNoDialog("righ or left");
    this.controller.control(like, this.candidate);
  }
}
