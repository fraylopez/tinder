import { Session } from "../../../server/models/Session";

export abstract class StateController {
  protected session: Session;

  constructor(session: Session) {
    this.session = session;
  }

  public back(): void {
    this.session.back();
  }
}
