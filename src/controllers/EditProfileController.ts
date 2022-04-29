import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { GetProfileController } from "./GetProfileController";

export class EditProfileController {
  private persistenceService: FileSystemProfilePersistenceService;

  constructor(
    private getProfileController: GetProfileController,
  ) {
    this.persistenceService = new FileSystemProfilePersistenceService();
  }

  public control(
    name: string,
    profilePrimitives: ProfilePrimitives
  ) {
    const profile = this.getProfileController.control(name);
    profile.updateWithPrimitives(profilePrimitives);
    this.persistenceService.update(profile);
  }
}
