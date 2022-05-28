import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class CreateProfileController {
  constructor(private persistenceService: FileSystemProfilePersistenceService) {}

  public control(name: string, age: number, gender: string): void {
    const profile = new Profile(name, age, gender);
    this.persistenceService.create(profile);
  }
}
