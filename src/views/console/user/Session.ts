import { AppState } from "./AppState";

export class Session {
  private state: AppState = AppState.Initial;

  public getState(): AppState {
    return this.state;
  }

  public setState(state: AppState): void {
    this.state = state;
  }
}
