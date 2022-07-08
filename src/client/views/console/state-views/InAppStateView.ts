import { InAppStateController } from "../../../../server/controllers/state/InAppStateController";
import { Session } from "../../../../server/models/Session";
import { MenuView } from "../menus/MenuView";
import { InAppStateMenu } from "../menus/InAppStateMenu";
import { StateView } from "./StateView";

export class InAppStateView extends StateView<InAppStateController> {
  constructor(session: Session) {
    super(session, new InAppStateController(session));
  }

  public render(): void {
    new MenuView(new InAppStateMenu(this.session, this.controller)).render();
  }
}
