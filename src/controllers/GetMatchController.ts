import { Match } from "../models/Match";
import { FileSystemMatchPersistenceService } from "../infrastructure/file-system/FileSystemMatchPersistenceService";

export class GetMatchController {
  constructor(
    private persistenceService: FileSystemMatchPersistenceService,
  ) {}

  public get(name: string): Match | null {
    return this.persistenceService.find(name);
  }
}
