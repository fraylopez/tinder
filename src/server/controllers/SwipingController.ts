import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";
import { Profile } from "../models/Profile";
import { SwipeDirection } from "../models/SwipeDirection";
import { User } from "../models/User";

export class SwippingController {
  constructor(private readonly persistenceService: FileSystemUserPersistenceService) { }

  public control(user: User, direction: SwipeDirection, candidate: Profile): void {
    user.swipe(direction, candidate);
    this.persistenceService.update(user);
  }
}
