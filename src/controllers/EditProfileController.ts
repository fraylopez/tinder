import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
import { ProfilePrimitives } from "../models/ProfilePrimitives";

export class EditProfileController {
  constructor(
    private readonly profile: Profile,
    private readonly persistenceService: FileSystemProfilePersistenceService
  ) {}

  public control(profilePrimitives: ProfilePrimitives): void {
    this.profile.updateWithPrimitives(profilePrimitives);
    this.persistenceService.update(this.profile);
  }
}
