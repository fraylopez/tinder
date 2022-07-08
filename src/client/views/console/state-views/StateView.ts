import { StateController } from "../../../../server/controllers/state/StateControllers";
import { Session } from "../../../../server/models/Session";
import { ConsoleView } from "../ConsoleView";

export abstract class StateView<T extends StateController = StateController> extends ConsoleView {
  constructor(protected readonly session: Session, protected readonly controller: T) {
    super();
  }

  abstract render(): void;
}
