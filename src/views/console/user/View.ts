abstract class BaseView {
  public render(): void {
    console.log(this.constructor.name);
  }

  public canRender(state: string): boolean {
    return true;
  }
}

export class InitialView extends BaseView {}
export class SwippingView extends BaseView {}
export class ProfileView extends BaseView {}
export class MatchListView extends BaseView {}

export class View {
  private session: Session;

  constructor(session: Session) {
    this.session = session;
  }

  public render() {
    do {
      switch (this.session.getState()) {
        case "Initial":
          new InitialView().render();
          break;

        case "Swipping":
          new SwippingView().render();
          break;

        case "Profile":
          new ProfileView().render();
          break;

        case "MatchList":
          new MatchListView().render();
          break;

        default:
          break;
      }
    } while (true);
  }
}

class Session {
  private state: string = "Initial";

  public getState(): string {
    return this.state;
  }

  public setState(state: string): void {
    this.state = state;
  }
}
