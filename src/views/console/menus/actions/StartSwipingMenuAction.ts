import { InAppStateController } from "../../../../controllers/state/InAppStateController";
import { IMenuItemAction } from "./IMenuItemAction";

export class StartSwipingMenuAction implements IMenuItemAction {
  constructor(private readonly controller: InAppStateController) {}

  public execute(): void {
    this.controller.startSwipping();
  }
}
