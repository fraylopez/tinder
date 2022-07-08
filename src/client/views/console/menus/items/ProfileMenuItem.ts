import { InAppStateController } from "../../../../../server/controllers/state/InAppStateController";
import { ProfileMenuAction } from "../actions/ProfileMenuAction";
import { MenuItem } from "./MenuItem";

export class ProfileMenuItem extends MenuItem {
  constructor(controller: InAppStateController) {
    super("Profile", new ProfileMenuAction(controller));
  }
}
