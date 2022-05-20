import { ConversationController, InAppController, InitialController, MatchListController, ProfileController, SwippingController } from "../../../controllers/StateControllers";
import { Session } from "../../../models/Session";
import { State } from "../../../models/State";
import { ConversationView } from "./ConversationView";
import { InAppView } from "./InAppView";
import { InitialView } from "./InitialView";
import { MatchListView } from "./MatchListView";
import { ProfileView } from "./ProfileView";
import { StateView } from "./StateView";
import { SwippingView } from "./SwippingView";

export class ViewsFactory {

  constructor(private session: Session) { }

  public getView(state: State): StateView {
    switch (state) {
      case (State.INITIAL):
        return new InitialView(new InitialController(this.session));
      case (State.INAPP):
        return new InAppView(new InAppController(this.session));
      case (State.PROFILE):
        return new ProfileView(new ProfileController(this.session));
      case (State.SWIPING):
        return new SwippingView(new SwippingController(this.session));
      case (State.MATCH_LIST):
        return new MatchListView(new MatchListController(this.session));
      case (State.CONVERSATION):
        return new ConversationView(new ConversationController(this.session));
    }
  }
}
