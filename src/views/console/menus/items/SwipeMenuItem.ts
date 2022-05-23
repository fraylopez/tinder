import { InAppStateController } from "../../../../controllers/state/InAppStateController";
import { MenuItem } from "./MenuItem";
import { SwipeMenuAction } from "../actions/SwipeMenuAction";

export class SwipeMenuItem extends MenuItem {
  constructor(controller: InAppStateController) {
    super("Swipe", new SwipeMenuAction(controller));
  }
}
