import { FileSystemUserPersistenceService } from "../../infrastructure/file-system/FileSystemUserPersistenceService";
import { Profile } from "../../models/Profile";
import { Session } from "../../models/Session";
import { SwipeDirection } from "../../models/SwipeDirection";
import { GetProfilesToSwipeController } from "../GetProfilesToSwipeController";
import { SwippingController } from "../SwipingController";
import { StateController } from "./StateControllers";

export class SwippingStateController extends StateController {
  private readonly getProfilesToSwipeController: GetProfilesToSwipeController;
  private readonly swippingController: SwippingController;

  constructor(session: Session) {
    super(session);
    this.getProfilesToSwipeController = new GetProfilesToSwipeController(
      FileSystemUserPersistenceService.getInstance()
    );
    this.swippingController = new SwippingController(FileSystemUserPersistenceService.getInstance());
  }

  public swipe(direction: SwipeDirection, candidate: Profile): void {
    this.swippingController.control(this.session.getUser(), direction, candidate);
  }

  public getProfilesToSwipe(): Profile[] {
    return this.getProfilesToSwipeController.control(this.session.getUser());
  }
}
