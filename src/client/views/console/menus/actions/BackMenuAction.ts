import { Session } from "../../../../../server/models/Session";
import { IMenuItemAction } from "./IMenuItemAction";

export class BackMenuAction implements IMenuItemAction {
  constructor(private readonly session: Session) { }

  execute(): void {
    this.session.back();
  }
}
