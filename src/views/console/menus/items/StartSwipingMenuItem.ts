import { InAppStateController } from "../../../../controllers/state/InAppStateController";
import { MenuItem } from "./MenuItem";
import { StartSwipingMenuAction } from "../actions/StartSwipingMenuAction";

export class StartSwipingMenuItem extends MenuItem {
  constructor(controller: InAppStateController) {
    super("Start swipping", new StartSwipingMenuAction(controller));
  }
}
