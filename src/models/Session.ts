import { Profile } from "./Profile";
import { AppState } from "./AppState";
import assert from "assert";

export class Session {
  private state: AppState = AppState.INITIAL;
  private profile?: Profile;

  public login(profile: Profile) {
    this.profile = profile;
    this.state = AppState.INAPP;
  }

  public logOut() {
    this.profile = undefined;
    this.state = AppState.INITIAL;
  }

  public getProfile(): Profile {
    assert(this.isLoggedIn());
    return this.profile!;
  }

  public getState(): AppState {
    return this.state;
  }

  public getUserProfileName(): string {
    assert(this.isLoggedIn());
    return this.profile!.getName();
  }

  public isLoggedIn(): boolean {
    return !!this.profile;
  }

  public next(): void {
    this.state = Object.keys(AppState)[this.getCurrentStateIndex() + 1] as AppState;
  }

  public back() {
    assert(this.state !== AppState.INITIAL);
    this.state = Object.keys(AppState)[this.getCurrentStateIndex() - 1] as AppState;
  }

  private getCurrentStateIndex(): number {
    return Object.keys(AppState).indexOf(this.state);
  }
}
