/* eslint-disable max-classes-per-file */
import { Session } from "./models/Session";
import { ViewsFactory } from "./views/console/state-views/ViewsFactory";

export class Tinder {

  private viewsFactory: ViewsFactory;
  private session: Session;

  constructor() {
    this.session = new Session();
    this.viewsFactory = new ViewsFactory(this.session);
  }

  public render(): void {
    do {
      const currentView = this.viewsFactory.getView(this.session.getState());
      currentView.render();
    } while (true);
  }
}

new Tinder().render();
