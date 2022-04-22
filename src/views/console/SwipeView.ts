import { SwipeController } from "../../controllers/SwipeController";
import { Profile } from "../../models/Profile";
import { WithConsoleView } from "./WithConsoleView";

export class SwipeView extends WithConsoleView {
  private profile: Profile;
  private swipeController: SwipeController;

  constructor(profile: Profile) {
    super();
    this.profile = profile;
    this.swipeController = new SwipeController();
  }

  public async render(candidate: Profile): Promise<boolean> {
    this.console.print(`skibidii here it is: ${candidate.getName()}`);
    const swipeRight = await this.console.yesNoDialog("Swipe right?");
    this.console.print(`swipped ${swipeRight ? "right" : "left"} ... to be continue: `);
    return await this.swipeController.control(this.profile, candidate);
  }

}
