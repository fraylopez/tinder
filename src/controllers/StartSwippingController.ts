import { ProfilePersistenceService } from "../domain-services/ProfilePersistenceService";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";

export class StartSwippingController {
  private profilePersistenceService: ProfilePersistenceService;

  constructor() {
    this.profilePersistenceService = new FileSystemProfilePersistenceService();
  }

  public control(): Profile[] {
    return this.profilePersistenceService.findAll();
  }
}