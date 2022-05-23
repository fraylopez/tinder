import { StateController } from "../../../controllers/state/StateControllers";
import { Session } from "../../../models/Session";
import { ConsoleView } from "../ConsoleView";

export abstract class StateView extends ConsoleView {
  constructor(protected readonly session: Session, protected readonly controller: StateController) {
    super();
  }

  abstract render(): void;
}
