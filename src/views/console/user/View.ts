import { Session } from "./Session";
import { ViewFactory } from "./ViewFactory";

export class View {
  private session: Session;

  constructor(session: Session) {
    this.session = session;
  }

  public render() {
    const viewFactory = new ViewFactory(this.session);
    do {
      viewFactory.render();
    } while (true);
  }
}
