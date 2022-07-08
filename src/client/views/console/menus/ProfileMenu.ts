import { ProfileStateController } from "../../../controllers/state/ProfileStateController";
import { Session } from "../../../models/Session";
import { Menu } from "./Menu";
import { DeleteProfileMenuItem } from "./items/DeleteProfileMenuItem";
import { BackMenuItem } from "./items/BackMenuItem";
import { EditProfileMenuItem } from "./items/EditProfileMenuItem";

export class ProfileMenu extends Menu {
  constructor(session: Session, controller: ProfileStateController) {
    super("What do you want to do?", [
      new EditProfileMenuItem(controller),
      new DeleteProfileMenuItem(controller),
      new BackMenuItem(session),
    ]);
  }
}
