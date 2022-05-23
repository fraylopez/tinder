import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";

export class LoginController {
  constructor(private persistenceService: FileSystemProfilePersistenceService) {}

  public control(name: string): Profile | null {
    return this.persistenceService.find(name);
  }
}
