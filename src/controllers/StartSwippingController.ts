import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
import { User } from "../models/User";

export class StartSwippingController {
  constructor(private readonly user: User, private profilePersistenceService: FileSystemProfilePersistenceService) {}

  public control(): Profile[] {
    return this.profilePersistenceService.getProfiles({
      filter: "profiles-already-swiped",
    });
  }
}
