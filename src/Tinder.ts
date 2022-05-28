/* eslint-disable max-classes-per-file */
import { Session } from "./models/Session";
import { ConsoleViewFactory } from "./views/console/state-views/ConsoleViewFactory";

export class Tinder {
  private viewsFactory: ConsoleViewFactory;
  private session: Session;

  constructor() {
    this.session = new Session();
    this.viewsFactory = new ConsoleViewFactory(this.session);
  }

  public render(): void {
    do {
      this.viewsFactory.render();
    } while (true);
  }
}

new Tinder().render();
