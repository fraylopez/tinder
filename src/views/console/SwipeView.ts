import { SwipeController } from "../../controllers/SwipeController";
import { Profile } from "../../models/Profile";
import { WithConsoleView } from "./WithConsoleView";

export class SwipeView extends WithConsoleView {
  private swipeController: SwipeController;

  constructor() {
    super();
    this.swipeController = new SwipeController();
  }

  public async render(profile: Profile): Promise<boolean> {
    this.console.print(`skibidii here it is: ${profile.getName()}`);
    const swipeRight = await this.console.yesNoDialog("Swipe right?");
    this.console.print(`swipped ${swipeRight ? "right" : "left"} ... to be continue: `);
    return swipeRight;
  }

}
