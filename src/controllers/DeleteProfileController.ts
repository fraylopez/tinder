import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Controller } from "./Controller";

export class DeleteProfileController implements Controller<[name: string], void> {
  constructor(private persistenceService: FileSystemProfilePersistenceService) {}

  public control(name: string): void {
    const profile = this.persistenceService.find(name);
    this.persistenceService.delete(profile!);
  }
}
