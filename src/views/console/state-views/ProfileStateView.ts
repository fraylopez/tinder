import { Session } from "../../../models/Session";
import { ProfileStateController } from "../../../controllers/state/ProfileStateController";
import { StateView } from "./StateView";
import { MenuView } from "../menus/MenuView";
import { ProfileMenu } from "../menus/ProfileMenu";

export class ProfileStateView extends StateView<ProfileStateController> {
  constructor(session: Session) {
    const controller = new ProfileStateController(session);
    super(session, controller);
  }

  render(): void {
    new MenuView(new ProfileMenu(this.session, this.controller)).render();
  }
}
