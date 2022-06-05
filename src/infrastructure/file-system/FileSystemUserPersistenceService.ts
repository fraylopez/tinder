import * as fs from "fs";
import { Profile } from "../../models/Profile";
import { User } from "../../models/User";
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

  public create(user: User): void {
    const model: FileSystemUser = user.toPrimitives();
    const stringifiedProfiles = fs.readFileSync("./src/data/users.json", "utf8");
    if (stringifiedProfiles) {
      const parsedJson = JSON.parse(stringifiedProfiles) as FileSystemUser[];
      fs.writeFileSync("./src/data/users.json", JSON.stringify([...parsedJson, model]));
    } else {
      fs.writeFileSync("./src/data/users.json", JSON.stringify([model]));
    }
  }

  public find(id: string): User | null {
    const users = fs.readFileSync("./src/data/users.json", "utf8");
    const array: FileSystemUser[] = JSON.parse(users) as FileSystemUser[];
    const foundUser = array.find((user: FileSystemUser) => user.id === id);
    if (!foundUser) {
      return null;
    }
    return User.fromPrimitives(foundUser);
  }

  private parsedJson(): FileSystemUser[] {
    const stringified = fs.readFileSync("./src/data/users.json", "utf8");
    return JSON.parse(stringified) as FileSystemUser[];
  }

  public delete(user: User) {
    const parsedJson = this.parsedJson();

    parsedJson.forEach((fileSystemUser: FileSystemUser, index: number) => {
      if (fileSystemUser.id === user.getId()) {
        parsedJson.splice(index, 1);
      }
    });
    fs.writeFileSync("./src/data/users.json", JSON.stringify(parsedJson));
  }

  public getCandidatesProfiles(user: User): Profile[] {
    throw new Error("Method not implemented.");
  }

  public update(user: User) {
    const parsedJson = this.parsedJson();

    parsedJson.forEach((fileSystemUser: FileSystemUser, index: number) => {
      if (fileSystemUser.id === user.getId()) {
        parsedJson[index] = user.toPrimitives();
      }
    });

    fs.writeFileSync("./src/data/users.json", JSON.stringify(parsedJson));
  }
}
