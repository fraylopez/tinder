import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Session } from "../models/Session";

export class CreateProfileController {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService,
    private session: Session,
  ) {}

  public control(name: string, age: number, gender: string): void {
    const profile = new Profile(name, age, gender);
    this.persistenceService.create(profile);

    this.session.setProfile(profile);
  }
}
