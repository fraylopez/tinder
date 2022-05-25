import { StateController } from "../../../controllers/state/StateControllers";
import { ConsoleView } from "../ConsoleView";

export abstract class StateView extends ConsoleView {
  constructor(protected readonly controller: StateController) {
    super();
  }

  abstract render(): void;
}
