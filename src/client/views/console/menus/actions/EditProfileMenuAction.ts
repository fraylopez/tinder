import { ProfileStateController } from "../../../../../server/controllers/state/ProfileStateController";
import { IMenuItemAction } from "./IMenuItemAction";
import { EditProfileView } from "../../user/EditProfileView";

export class EditProfileMenuAction implements IMenuItemAction {
  constructor(private readonly controller: ProfileStateController) { }
  execute(): void {
    new EditProfileView(this.controller).render();
  }
}
