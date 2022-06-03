import { InAppStateController } from "../../../../controllers/state/InAppStateController";
import { ConsoleView } from "../../ConsoleView";
import { ProfileView } from "../../user/ProfileView";
import { IMenuItemAction } from "./IMenuItemAction";

export class ProfileMenuAction extends ConsoleView implements IMenuItemAction {
  constructor(private readonly controller: InAppStateController) {
    super();
  }

  execute(): void {
    new ProfileView(this.controller.getProfile()).render();
  }
}
