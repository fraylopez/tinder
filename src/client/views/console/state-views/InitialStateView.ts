import { InitialStateController } from "../../../../server/controllers/state/InitialStateController";
import { Session } from "../../../../server/models/Session";
import { InitialStateMenu } from "../menus/InitialStateMenu";
import { MenuView } from "../menus/MenuView";
import { StateView } from "./StateView";

export class InitialStateView extends StateView<InitialStateController> {
  constructor(session: Session) {
    super(session, new InitialStateController(session));
  }

  render(): void {
    this.console.writeln("WELCOME TO TINDER🔥");
    new MenuView(new InitialStateMenu(this.session, this.controller)).render();
  }
}
