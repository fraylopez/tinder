import { Session } from "../../../../server/models/Session";
import { ProfileStateController } from "../../../../server/controllers/state/ProfileStateController";
import { StateView } from "./StateView";
import { MenuView } from "../menus/MenuView";
import { ProfileMenu } from "../menus/ProfileMenu";

export class ProfileStateView extends StateView<ProfileStateController> {
  constructor(session: Session) {
    super(session, new ProfileStateController(session));
  }

  render(): void {
    new MenuView(new ProfileMenu(this.session, this.controller)).render();
  }
}
