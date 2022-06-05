import { Profile } from "../models/Profile";
import { User } from "../models/User";
import { FileSystemUserPersistenceService } from "../infrastructure/file-system/FileSystemUserPersistenceService";

export class CreateUserController {
  constructor(private persistenceService: FileSystemUserPersistenceService) {}

  public control(name: string, age: number, gender: string): void {
    const user = new User(new Profile(name, age, gender));
    this.persistenceService.create(user);
  }
}
