import { InitialStateController } from "../../../../server/controllers/state/InitialStateController";
import { Session } from "../../../../server/models/Session";
import { Menu } from "./Menu";
import { LoginMenuItem } from "./items/LoginMenuItem";
import { CreateUserMenuItem } from "./items/CreateUserMenuItem";

export class InitialStateMenu extends Menu {
  constructor(session: Session, controller: InitialStateController) {
    super("Please, choose the option you want to perform", [
      new LoginMenuItem(session, controller),
      new CreateUserMenuItem(controller),
    ]);
  }
}
