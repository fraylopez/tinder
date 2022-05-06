import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class EditProfileController {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService
  ) {}

  public control(name: string, profile: Profile) {
    this.persistenceService.update(name, profile);
  }
}
