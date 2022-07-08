import { InitialStateController } from "../../../../../server/controllers/state/InitialStateController";
import { MenuItem } from "./MenuItem";
import { CreateUserAction } from "../actions/CreateUserAction";

export class CreateUserMenuItem extends MenuItem {
  constructor(controller: InitialStateController) {
    super("Create user", new CreateUserAction(controller));
  }
}
