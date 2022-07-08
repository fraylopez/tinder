import { ProfileStateController } from "../../../../controllers/state/ProfileStateController";
import { MenuItem } from "./MenuItem";
import { DeleteProfileMenuAction } from "../actions/DeleteProfileMenuAction";

export class DeleteProfileMenuItem extends MenuItem {
  constructor(controller: ProfileStateController) {
    super("Delete profile", new DeleteProfileMenuAction(controller));
  }
}
