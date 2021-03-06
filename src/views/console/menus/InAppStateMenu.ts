import { InAppStateController } from "../../../controllers/state/InAppStateController";
import { Session } from "../../../models/Session";
import { Menu } from "./Menu";
import { ProfileMenuItem } from "./items/ProfileMenuItem";
import { StartSwipingMenuItem } from "./items/StartSwipingMenuItem";

export class InAppStateMenu extends Menu {
  constructor(session: Session, controller: InAppStateController) {
    super(`Hiðð¾, ${session.getUserName()}. What do you want to do now?`, [
      new StartSwipingMenuItem(controller),
      new ProfileMenuItem(controller),
    ]);
  }
}
