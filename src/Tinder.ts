import { UserController } from "./controllers/UserController";
import { FileSystemProfilePersistenceService } from "./infrastructure/file-system/FileSystemProfilePersistenceService";
import { UserView } from "./views/console/user/UserView";

export class Tinder {
  private view: UserView;
  private controller: UserController;

  constructor() {
    this.controller = new UserController(new FileSystemProfilePersistenceService());
    this.view = new UserView(this.controller);
  }

  public render(): void {
    this.view.render();
  }
}

new Tinder().render();
