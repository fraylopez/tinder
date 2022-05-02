import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class LoginController {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService,
  ) {
  }

  public control(name: string): boolean {
    const profile = this.persistenceService.find(name);
    return !!profile;
  }
}
