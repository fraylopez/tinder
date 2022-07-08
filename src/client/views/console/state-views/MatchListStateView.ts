import { MatchListStateController } from "../../../controllers/state/MatchListController";
import { Session } from "../../../models/Session";
import { StateView } from "./StateView";

export class MatchListStateView extends StateView {
  constructor(session: Session) {
    const controller = new MatchListStateController(session);
    super(session, controller);
  }
  render(): void {
    this.console.writeln(`this is match list view with controller ${this.controller.constructor.name}`);
  }
}
