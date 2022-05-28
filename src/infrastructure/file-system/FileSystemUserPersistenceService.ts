import * as fs from "fs";
import { Swipe } from "../../models/Swipe";
import { User } from "../../models/User";
import { FileSystemProfilePersistenceService } from "./FileSystemProfilePersistenceService";
import { FileSystemUser } from "./models/FileSystemUser";

export class FileSystemUserPersistenceService {
  private static instance: FileSystemUserPersistenceService;

  public static getInstance(): FileSystemUserPersistenceService {
    if (!this.instance) {
      this.instance = new FileSystemUserPersistenceService();
    }
    return this.instance;
  }

  private constructor() {
    //
  }

  public find(id: string): User | null {
    const users = fs.readFileSync("./src/data/users.json", "utf8");
    const array: FileSystemUser[] = JSON.parse(users) as FileSystemUser[];
    const foundUser = array.find((profile: FileSystemUser) => profile.id === id);
    if (!foundUser) {
      return null;
    }
    const profile = FileSystemProfilePersistenceService.getInstance().find(foundUser.id);
    return new User(profile!, this.getSwipes(foundUser));
  }

  private parsedJson(): FileSystemUser[] {
    const stringified = fs.readFileSync("./src/data/users.json", "utf8");
    return JSON.parse(stringified) as FileSystemUser[];
  }

  update(user: User) {
    const parsedJson = this.parsedJson();

    parsedJson.forEach((userItem: FileSystemUser, index: number) => {
      if (userItem.id === user.getId()) {
        parsedJson[index] = {
          id: user.getId(),
          swipes: user.toPrimitives().swipes.map((swipe) => ({
            direction: swipe.direction,
            to: swipe.candidate.name,
          })),
        };
      }
    });

    fs.writeFileSync("./src/data/users.json", JSON.stringify(parsedJson));
  }

  private getSwipes(user: FileSystemUser): Swipe[] {
    return user.swipes.map(
      (swipe) => new Swipe(swipe.direction, FileSystemProfilePersistenceService.getInstance().find(swipe.to)!)
    );
  }
}
