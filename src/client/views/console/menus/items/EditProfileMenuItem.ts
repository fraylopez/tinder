import { ProfileStateController } from "../../../../../server/controllers/state/ProfileStateController";
import { MenuItem } from "./MenuItem";
import { EditProfileMenuAction } from "../actions/EditProfileMenuAction";

export class EditProfileMenuItem extends MenuItem {
  constructor(controller: ProfileStateController) {
    super("Edit profile", new EditProfileMenuAction(controller));
  }
}
