import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";
import { User } from "../models/User";

export class LoginController {
  constructor(private persistenceService: FileSystemUserPersistenceService) {}

  public control(id: string): User | null {
    return this.persistenceService.find(id);
  }
}
