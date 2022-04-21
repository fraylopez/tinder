import { StartSwippingView } from "./StartSwippingView";
import { SwipeView } from "./SwipeView";
import { WithConsoleView } from "./WithConsoleView";

export class InAppView extends WithConsoleView {
  private startSwippingView: StartSwippingView;
  private swipeView: SwipeView;

  constructor() {
    super();
    this.swipeView = new SwipeView();
    this.startSwippingView = new StartSwippingView();
  }

  public async render(): Promise<void> {
    this.console.print("Actually, u just only will be able to swipe :P");
    do {
      const profiles = this.startSwippingView.interact();
      for (const profile of profiles) {
        await this.swipeView.render(profile);
      }
    } while(await this.console.yesNoDialog("wanna start swipping again?"));
  }
}
