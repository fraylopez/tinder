import { Profile } from "../../models/Profile";
import { OpenConversationView } from "./OpenConversationView";
import { StartSwippingView } from "./StartSwippingView";
import { SwipeView } from "./SwipeView";
import { WithConsoleView } from "./WithConsoleView";

export class InAppView extends WithConsoleView {
  private profile: Profile;
  private startSwippingView: StartSwippingView;
  private swipeView: SwipeView;
  private openConversationView: OpenConversationView;

  constructor(profile: Profile) {
    super();
    this.profile = profile;
    this.swipeView = new SwipeView(this.profile);
    this.startSwippingView = new StartSwippingView();
    this.openConversationView = new OpenConversationView();
  }

  public async render(): Promise<void> {
    this.console.print("Actually, u just only will be able to swipe :P");
    do {
      const candidates = this.startSwippingView.interact();
      for (const candidate of candidates) {
        if (await this.swipeView.render(candidate)) {
          if(await this.console.yesNoDialog("hey! u match! wanna open conversation?")) {
            this.openConversationView.render();
          }
        }
      }
    } while(await this.console.yesNoDialog("wanna start swipping again?"));
  }
}
