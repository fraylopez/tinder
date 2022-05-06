import { UserController } from "./controllers/UserController";
import { UserView } from "./views/console/user/UserView";

export class Tinder {
  private view: UserView;
  private actor: ActorCS;
  private controller: UserController;

  constructor() {
    this.controller = new UserController();
    this.view = new UserView(this.controller);
    this.actor = new ActorCS(this.controller);
  }

  public render(): void {
    this.view.render();
  }
}

new Tinder().render();

class ActorCS {
  constructor(controller: UserController) {}
}
