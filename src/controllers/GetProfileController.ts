import { Profile } from "../models/Profile";
import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Controller } from "./Controller";

export class GetProfileController implements Controller<[name: string], Profile | null> {
  constructor(private persistenceService: FileSystemProfilePersistenceService) {}

  public control(name: string): Profile | null {
    return this.persistenceService.find(name);
  }
}
