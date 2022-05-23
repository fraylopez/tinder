import { InitialStateController } from "../../../controllers/state/InitialStateController";
import { Session } from "../../../models/Session";
import { MenuItem } from "./items/MenuItem";
import { LoginAction } from "./actions/LoginAction";

export class LoginMenuItem extends MenuItem {
  constructor(session: Session, controller: InitialStateController) {
    super("Login with an existing profile", new LoginAction(session, controller));
  }
}
