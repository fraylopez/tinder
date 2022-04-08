import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class LoginController {
  private persistenceService: FileSystemProfilePersistenceService;

  constructor() {
    this.persistenceService = new FileSystemProfilePersistenceService();
  }

  public control(name: string): boolean {
    const profile = this.persistenceService.find(name);
    return !!profile;
  }
}
