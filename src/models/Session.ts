import { Profile } from "./Profile";
import { State } from "./State";

export class Session {
  private state: State = State.INITIAL;
  private profile!: Profile;

  public setProfile(profile: Profile) {
    this.profile = profile;
    this.next();
  }

  public getState(): State {
    return this.state;
  }

  public setState(state: State) {
    this.state = state;
  }

  public next(): void {
    this.state = Object.keys(State)[
      this.getCurrentStateIndex() + 1
    ] as State;
  }

  private getCurrentStateIndex(): number {
    return Object.keys(State).indexOf(this.state);
  }
}
