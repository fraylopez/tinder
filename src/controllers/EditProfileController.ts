import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ProfilePrimitives } from "../models/ProfilePrimitives";

export class EditProfileController {
  private persistenceService: FileSystemProfilePersistenceService;

  constructor() {
    this.persistenceService = new FileSystemProfilePersistenceService();
  }

  public control(
    existingName: string,
    profilePrimitives: ProfilePrimitives
  ) {
    const profile = Profile.fromPrimitives(profilePrimitives);
    this.persistenceService.update(existingName, profile);
  }
}
