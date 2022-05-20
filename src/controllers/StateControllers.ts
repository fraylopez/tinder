/* eslint-disable max-classes-per-file */
import { Session } from "../models/Session";

export abstract class StateController {
  protected session: Session;

  constructor(session: Session) {
    this.session = session;
  }
}

export class InitialController extends StateController {
}
export class InAppController extends StateController {
}
export class SwippingController extends StateController {
}
export class ProfileController extends StateController {
}
export class MatchListController extends StateController {
}
export class ConversationController extends StateController {
}
