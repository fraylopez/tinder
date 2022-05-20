import { Profile } from "./Profile";
import { State } from "./State";

export class Session {
  private state: State = State.INITIAL;
  private profile!: Profile;

  public setProfile(profile: Profile) {
    this.profile = profile;
    this.state = State.INAPP;
  }

  public getState(): State {
    return this.state;
  }

  public setState(state: State) {
    this.state = state;
  }
}
