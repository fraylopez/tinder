import { Profile } from "../models/Profile";
import { User } from "../models/User";
import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";

export class CreateUserController {
  constructor(private persistenceService: FileSystemUserPersistenceService) {}

  public control(name: string, age: number, gender: string, id: string): void {
    const user = new User(new Profile(name, age, gender), undefined, undefined, id);
    this.persistenceService.create(user);
  }
}
