import { StartSwippingController } from "../../../controllers/StartSwippingController";
import { SwippingController } from "../../../controllers/SwipingController";
import { Profile } from "../../../models/Profile";
import { ConsoleView } from "../ConsoleView";
import { CandidateView } from "./CandidateView";

export class StartSwippingView extends ConsoleView {
  constructor(private view: CandidateView, private controller: StartSwippingController) {
    super();
  }

  public render(): void {
    this.console.writeInln("START SWIPPING");
    let candidates: Profile[] = this.controller.control();

    do {
      new CandidateView(new SwippingController()).render(candidates.pop());
    } while (candidates);
  }
}
