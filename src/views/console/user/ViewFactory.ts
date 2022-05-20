import { AppState } from "./AppState";
import { Session } from "./Session";
import { MatchListView } from "./MatchListView";
import { ProfileView } from "./ProfileView.1";
import { SwippingView } from "./SwippingView";
import { InitialView } from "./InitialView";
import { BaseView } from "./BaseView";

export class ViewFactory {
  private readonly views: Map<AppState, BaseView>;

  constructor(private readonly session: Session) {
    this.views = new Map();
    this.views.set(AppState.Initial, new InitialView(this.session));
    this.views.set(AppState.Swipping, new SwippingView(this.session));
    this.views.set(AppState.Profile, new ProfileView(this.session));
    this.views.set(AppState.MatchList, new MatchListView(this.session));
  }

  public render(): void {
    this.views.get(this.session.getState()).render();
  }
}
