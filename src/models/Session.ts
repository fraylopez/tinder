import { AppState } from "./AppState";
import assert from "assert";
import { User } from "./User";
import { Profile } from "./Profile";

export class Session {
  private state: AppState = AppState.INITIAL;
  private user?: User;

  public login(user: User) {
    this.user = user;
    this.state = AppState.INAPP;
  }

  public logOut() {
    this.user = undefined;
    this.state = AppState.INITIAL;
  }

  public getUser(): User {
    assert(this.isLoggedIn());
    return this.user!;
  }

  public getState(): AppState {
    return this.state;
  }

  public getUserName(): string {
    assert(this.isLoggedIn());
    return this.user!.getName();
  }

  public isLoggedIn(): boolean {
    return !!this.user;
  }

  public next(): void {
    this.state = Object.keys(AppState)[this.getCurrentStateIndex() + 1] as AppState;
  }

  public getProfile(): Profile {
    return this.user!.getProfile();
  }

  public back() {
    assert(this.state !== AppState.INITIAL);
    this.state = Object.keys(AppState)[this.getCurrentStateIndex() - 1] as AppState;
  }

  private getCurrentStateIndex(): number {
    return Object.keys(AppState).indexOf(this.state);
  }
}
