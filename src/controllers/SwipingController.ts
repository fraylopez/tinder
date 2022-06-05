import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";
import { Profile } from "../models/Profile";
import { SwipeDirection } from "../models/SwipeDirection";
import { User } from "../models/User";

export class SwippingController {
  private readonly persistenceService: FileSystemUserPersistenceService;
  constructor(private user: User) {
    this.persistenceService = FileSystemUserPersistenceService.getInstance();
  }

  public control(direction: SwipeDirection, candidate: Profile): void {
    this.user.swipe(direction, candidate);
    this.persistenceService.update(this.user);
  }
}
