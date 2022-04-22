import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class DeleteProfileController {
  private persistenceService: FileSystemProfilePersistenceService;

  constructor() {
    this.persistenceService = new FileSystemProfilePersistenceService();
  }

  public control(name: string, confirmation: boolean): boolean {
    if (confirmation) {
      const profile = this.persistenceService.find(name);
      if (!!profile) {
        this.persistenceService.delete(profile);
        return true;
      }
    }
    return false;
  }
}