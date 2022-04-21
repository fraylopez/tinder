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
      const candidates = this.startSwippingView.interact();
      for (const candidate of candidates) {
        await this.swipeView.render(candidate);
      }
    } while(await this.console.yesNoDialog("wanna start swipping again?"));
  }
}
