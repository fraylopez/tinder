import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";

export class LoginController {
  constructor(private persistenceService: FileSystemProfilePersistenceService) {}

  public control(name: string): boolean {
    const isValidCredentials = this.persistenceService.find(name);
    return !!isValidCredentials;
  }
}
