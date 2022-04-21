import { Profile } from "../models/Profile";
import * as fs from "fs";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class EditProfileController {
  private persistenceService: FileSystemProfilePersistenceService;

  constructor() {
    this.persistenceService = new FileSystemProfilePersistenceService();
  }

  public profileExistsByName(existingName: string): boolean {
    return !!this.persistenceService.find(existingName);
  }

  public editProfileData(existingName: string, name: string, age: number, gender: string) {
    const profile = new Profile(name, age, gender);
    this.persistenceService.update(existingName, profile);
  }
}
