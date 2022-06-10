import { FileSystemUserPersistenceService } from "../../infrastructure/file-system/FileSystemUserPersistenceService";
import { Profile } from "../../models/Profile";
import { Session } from "../../models/Session";
import { SwipeDirection } from "../../models/SwipeDirection";
import { GetProfilesToSwipeController } from "../GetProfilesToSwipeController";
import { SwipingController } from "../SwipingController";
import { StateController } from "./StateControllers";

export class SwipingStateController extends StateController {
  private readonly getProfilesToSwipeController: GetProfilesToSwipeController;
  private readonly swipingController: SwipingController;

  constructor(session: Session) {
    super(session);
    this.getProfilesToSwipeController = new GetProfilesToSwipeController(
      FileSystemUserPersistenceService.getInstance()
    );
    this.swipingController = new SwipingController(FileSystemUserPersistenceService.getInstance());
  }

  public swipe(direction: SwipeDirection, candidate: Profile): void {
    this.swipingController.control(this.session.getUser(), direction, candidate);
  }

  public getProfilesToSwipe(): Profile[] {
    return this.getProfilesToSwipeController.control(this.session.getUser());
  }
}
