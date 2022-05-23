import assert from "assert";
import { AppState } from "../../../models/AppState";
import { Session } from "../../../models/Session";
import { ConversationStateView } from "./ConversationStateView";
import { InAppStateView } from "./InAppStateView";
import { InitialStateView } from "./InitialStateView";
import { MatchListStateView } from "./MatchListStateView";
import { ProfileStateView } from "./ProfileStateView";
import { StateView } from "./StateView";
import { SwippingStateView } from "./SwippingStateView";

export class ConsoleViewFactory {
  private readonly views: Map<AppState, StateView>;

  constructor(private readonly session: Session) {
    this.views = new Map();
    this.views.set(AppState.INITIAL, new InitialStateView(this.session));
    this.views.set(AppState.INAPP, new InAppStateView(this.session));
    this.views.set(AppState.SWIPING, new SwippingStateView(this.session));
    this.views.set(AppState.CONVERSATION, new ConversationStateView(this.session));
    this.views.set(AppState.PROFILE, new ProfileStateView(this.session));
    this.views.set(AppState.MATCH_LIST, new MatchListStateView(this.session));
  }

  public render(): void {
    const view = this.views.get(this.session.getState());
    assert(view, `Not matching view for state ${this.session.getState()}`);
    view.render();
  }
}
