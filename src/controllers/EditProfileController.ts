import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
import { ProfilePrimitives } from "../models/ProfilePrimitives";

export class EditProfileController {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService,
  ) {
  }

  public control(
    profile: Profile,
    profilePrimitives: ProfilePrimitives
  ): void {
    // TODO: 
    profile.update();
    this.persistenceService.update(profile);
  }
}
