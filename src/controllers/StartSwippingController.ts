import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";
import { Profile } from "../models/Profile";
import { User } from "../models/User";

export class StartSwippingController {
  constructor(private readonly user: User, private persistenceService: FileSystemUserPersistenceService) {}

  public control(): Profile[] {
    return this.persistenceService.getCandidatesProfiles(this.user);
  }
}
