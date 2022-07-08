import assert from "assert";
import { State } from "../../../models/navigation/State";
import { Session } from "../../../models/Session";
import { ConversationStateView } from "./ConversationStateView";
import { InAppStateView } from "./InAppStateView";
import { InitialStateView } from "./InitialStateView";
import { MatchListStateView } from "./MatchListStateView";
import { ProfileStateView } from "./ProfileStateView";
import { StateView } from "./StateView";
import { SwippingStateView } from "./SwippingStateView";

export class ConsoleViewFactory {
  private readonly views: Map<State, StateView>;

  constructor(private readonly session: Session) {
    this.views = new Map();
    this.views.set(State.INITIAL, new InitialStateView(this.session));
    this.views.set(State.IN_APP, new InAppStateView(this.session));
    this.views.set(State.SWIPPING, new SwippingStateView(this.session));
    this.views.set(State.CONVERSATION, new ConversationStateView(this.session));
    this.views.set(State.PROFILE, new ProfileStateView(this.session));
    this.views.set(State.MATCH_LIST, new MatchListStateView(this.session));
  }

  public render(): void {
    const view = this.views.get(this.session.getState());
    assert(view, `Not matching view for state ${this.session.getState()}`);
    view.render();
  }
}
