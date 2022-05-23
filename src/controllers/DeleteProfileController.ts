import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";

export class DeleteProfileController {
  constructor(private readonly profile: Profile, private persistenceService: FileSystemProfilePersistenceService) {}

  public control(): void {
    this.persistenceService.delete(this.profile);
  }
}
