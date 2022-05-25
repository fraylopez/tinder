import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Session } from "../models/Session";

export class LoginController {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService,
    private session: Session,
  ) {}

  public control(name: string): boolean {
    // TODO: about returning a boolean, for now is our way to check "credentials"
    const profile = this.persistenceService.find(name);

    if(!profile) {
      return false;
    }

    this.session.setProfile(profile);

    return true;
  }
}
