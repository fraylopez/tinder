import { InitialStateController } from "../../../../../server/controllers/state/InitialStateController";
import { ConsoleView } from "../../ConsoleView";
import { CreateUserView } from "../../user/CreateUserView";
import { IMenuItemAction } from "./IMenuItemAction";

export class CreateUserAction extends ConsoleView implements IMenuItemAction {
  constructor(private readonly controller: InitialStateController) {
    super();
  }

  execute(): void {
    new CreateUserView(this.controller).render();
  }
}
