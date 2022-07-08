import { ProfileStateController } from "../../../../../server/controllers/state/ProfileStateController";
import { DeleteProfileView } from "../../user/DeleteProfileView";
import { IMenuItemAction } from "./IMenuItemAction";

export class DeleteProfileMenuAction implements IMenuItemAction {
  constructor(private readonly controller: ProfileStateController) { }

  execute(): void {
    new DeleteProfileView(this.controller).render();
  }
}
