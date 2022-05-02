import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { GetProfileController } from "./GetProfileController";

export class EditProfileController {
  constructor(
    private getProfileController: GetProfileController,
    private persistenceService: FileSystemProfilePersistenceService,
  ) {
  }

  public control(
    name: string,
    profilePrimitives: ProfilePrimitives
  ): void {
    const profile = this.getProfileController.control(name);
    if (profile) {
      profile.updateWithPrimitives(profilePrimitives);
      this.persistenceService.update(profile);
    }
  }
}
