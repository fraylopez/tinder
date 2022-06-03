import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
import { User } from "../models/User";

export class GetCandidateProfilesController {
  constructor(private readonly user: User, private persistenceService: FileSystemProfilePersistenceService) {}

  public control(): Profile[] {
    return this.persistenceService.getProfiles().filter((profile) => !this.user.equals(profile));
  }
}
