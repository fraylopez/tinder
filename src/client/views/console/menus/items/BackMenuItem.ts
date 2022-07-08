import { Session } from "../../../../../server/models/Session";
import { MenuItem } from "./MenuItem";
import { BackMenuAction } from "../actions/BackMenuAction";

export class BackMenuItem extends MenuItem {
  constructor(session: Session) {
    super("Back", new BackMenuAction(session));
  }
}
