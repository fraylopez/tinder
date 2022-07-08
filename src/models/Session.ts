import assert from "assert";
import { User } from "./User";
import { Profile } from "./Profile";
import { Navigator } from "./navigation/Navigator";
import { State } from "./navigation/State";
import { Transition } from "./navigation/Transition";

export class Session {
  private readonly navigator: Navigator;
  private user?: User;

  constructor() {
    this.navigator = new Navigator();
  }

  public login(user: User) {
    this.user = user;
    this.navigator.transit(Transition.LOGIN);
  }

  public logOut() {
    this.user = undefined;
    this.navigator.logout();
  }

  public getUser(): User {
    assert(this.isLoggedIn());
    return this.user!;
  }

  public getState(): State {
    return this.navigator.getCurrentState();
  }

  public transit(transition: Transition): void {
    this.navigator.transit(transition);
  }

  public getUserName(): string {
    assert(this.isLoggedIn());
    return this.user!.getName();
  }

  public isLoggedIn(): boolean {
    return !!this.user;
  }

  public getProfile(): Profile {
    return this.user!.getProfile();
  }

  public back() {
    this.navigator.back();
  }
}
