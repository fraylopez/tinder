import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class GetProfileController {
  constructor(private persistenceService: FileSystemProfilePersistenceService) {}

  public control(name: string): Profile | null {
    return this.persistenceService.find(name);
  }
}
