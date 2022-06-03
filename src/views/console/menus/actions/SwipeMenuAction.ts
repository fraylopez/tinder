import { InAppStateController } from "../../../../controllers/state/InAppStateController";
import { IMenuItemAction } from "./IMenuItemAction";

export class SwipeMenuAction implements IMenuItemAction {
  constructor(private readonly controller: InAppStateController) {}

  execute(): void {
    this.controller.swipe();
  }
}
