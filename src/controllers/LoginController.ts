import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class LoginController {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService,
  ) {
  }

  public control(name: string): boolean {
    // TODO: about returning a boolean, for now is our way to check "credentials"
    const profile = this.persistenceService.find(name);
    return !!profile;
  }
}
