import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";
import { User } from "../models/User";

export class DeleteProfileController {
  constructor(private readonly user: User, private persistenceService: FileSystemUserPersistenceService) {}

  public control(): void {
    this.persistenceService.delete(this.user);
  }
}
