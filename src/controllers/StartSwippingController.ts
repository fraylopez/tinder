import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";
import { Profile } from "../models/Profile";
import { User } from "../models/User";

export class StartSwippingController {
  constructor(private persistenceService: FileSystemUserPersistenceService) {}

  public control(user: User): Profile[] {
    return this.persistenceService.getCandidatesProfiles(user);
  }
}
