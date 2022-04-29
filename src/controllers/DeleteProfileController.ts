import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class DeleteProfileController {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService
  ) {}

  public control(name: string, confirmation: boolean): boolean {
    if (confirmation) {
      const profile = this.persistenceService.find(name);
      this.persistenceService.delete(profile!);
      return true;
    }
    return false;
  }
}
