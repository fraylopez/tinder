import { StartSwippingController } from "../../controllers/StartSwippingController";
import { Profile } from "../../models/Profile";

export class StartSwippingView {
  private startSwippingController: StartSwippingController;
  
  constructor() {
    this.startSwippingController = new StartSwippingController();
  }

  // TO DEBT: start swipping is responsable of "load" some profiles in order to enable user to swipe over profiles
  // so StartSwippingView does not has to render anything! --> startSwippingView.interact() ?
  public interact(): Profile[] {
    return this.startSwippingController.control();
  }

}
