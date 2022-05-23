import { InitialStateController } from "../../../controllers/state/InitialStateController";
import { ConsoleView } from "../ConsoleView";
import { CreateProfileView } from "../user/CreateProfileView";
import { IMenuItemAction } from "./IMenuItemAction";

export class CreateProfileAction extends ConsoleView implements IMenuItemAction {
  constructor(private readonly controller: InitialStateController) {
    super();
  }

  execute(): void {
    new CreateProfileView(this.controller).render();
  }
}
