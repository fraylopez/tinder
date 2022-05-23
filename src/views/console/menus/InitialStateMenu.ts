import { InitialStateController } from "../../../controllers/state/InitialStateController";
import { Session } from "../../../models/Session";
import { Menu } from "./Menu";
import { LoginMenuItem } from "./LoginMenuItem";
import { CreateProfileMenuItem } from "./items/CreateProfileMenuItem";

export class InitialStateMenu extends Menu {
  constructor(session: Session, controller: InitialStateController) {
    super("Please, choose the option you want to perform [1/4]:", [
      new LoginMenuItem(session, controller),
      new CreateProfileMenuItem(controller),
    ]);
  }
}
