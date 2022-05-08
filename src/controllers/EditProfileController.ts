import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { Controller } from "./Controller";
import { GetProfileController } from "./GetProfileController";

export class EditProfileController implements Controller<[name: string, profilePrimitives: ProfilePrimitives], void> {
  constructor(
    private getProfileController: GetProfileController,
    private persistenceService: FileSystemProfilePersistenceService
  ) {}

  public control(name: string, profilePrimitives: ProfilePrimitives): void {
    const profile = this.getProfileController.control(name);
    profile.updateWithPrimitives(profilePrimitives);
    this.persistenceService.update(profile);
  }
}
