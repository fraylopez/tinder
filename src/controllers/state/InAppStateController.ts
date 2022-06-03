import { Profile } from "../../models/Profile";
import { StateController } from "./StateControllers";

export class InAppStateController extends StateController {
  public swipe(): void {
    //
  }

  public getProfile(): Profile {
    this.session.next();
    return this.session.getProfile();
  }
}
