import { Profile } from "./Profile";
import { AppState } from "./AppState";

export class Session {
  private state: AppState = AppState.INITIAL;
  private profile!: Profile;

  public login(profile: Profile) {
    this.profile = profile;
    this.state = AppState.INAPP;
  }

  public getState(): AppState {
    return this.state;
  }

  public setState(state: AppState) {
    this.state = state;
  }

  isLoggedIn(): boolean {
    return !!this.profile;
  }

  public next(): void {
    this.state = Object.keys(AppState)[this.getCurrentStateIndex() + 1] as AppState;
  }

  private getCurrentStateIndex(): number {
    return Object.keys(AppState).indexOf(this.state);
  }
}