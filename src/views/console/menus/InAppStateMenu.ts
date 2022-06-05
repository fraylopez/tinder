import { InAppStateController } from "../../../controllers/state/InAppStateController";
import { Session } from "../../../models/Session";
import { Menu } from "./Menu";
import { ProfileMenuItem } from "./items/ProfileMenuItem";
import { SwipeMenuItem } from "./items/SwipeMenuItem";

export class InAppStateMenu extends Menu {
  constructor(session: Session, controller: InAppStateController) {
    super(`Hi👋🏾, ${session.getUserName()}. What do you want to do now?`, [
      new SwipeMenuItem(controller),
      new ProfileMenuItem(controller),
    ]);
  }
}
