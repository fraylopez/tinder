import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";
import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { User } from "../models/User";

export class EditProfileController {
  constructor(private readonly user: User, private readonly persistenceService: FileSystemUserPersistenceService) {}

  public control(profilePrimitives: ProfilePrimitives): void {
    this.user.updateProfile(profilePrimitives);
    this.persistenceService.update(this.user);
  }
}
