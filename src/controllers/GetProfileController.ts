import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Controller } from "./Controller";

export class GetProfileController implements Controller<string, void> {
  constructor(
    private persistenceService: FileSystemProfilePersistenceService,
  ) {
  }

  public control(name: string): Profile | null {
    return this.persistenceService.find(name);
  }
}
