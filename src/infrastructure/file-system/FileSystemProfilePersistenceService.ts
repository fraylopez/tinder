import * as fs from "fs";
import { Profile } from "../../models/Profile";
import { FileSystemProfile } from "./models/FileSystemProfile";

export class FileSystemProfilePersistenceService {
  private static instance: FileSystemProfilePersistenceService;

  public static getInstance(): FileSystemProfilePersistenceService {
    if (!this.instance) {
      this.instance = new FileSystemProfilePersistenceService();
    }
    return this.instance;
  }

  private constructor() {
    //
  }

  public find(id: string): Profile | null {
    const profiles = fs.readFileSync("./src/data/profiles.json", "utf8");
    const array: FileSystemProfile[] = JSON.parse(profiles) as FileSystemProfile[];
    const foundUser = array.find((profile: FileSystemProfile) => profile.name === id);
    return foundUser
      ? Profile.fromPrimitives({
          name: foundUser.name,
          age: foundUser.age,
          gender: foundUser.gender,
        })
      : null;
  }

  public create(profile: Profile): void {
    const primitives = profile.toPrimitives();
    const model: FileSystemProfile = {
      name: primitives.name,
      age: primitives.age,
      gender: primitives.gender,
    };
    const stringifiedProfiles = fs.readFileSync("./src/data/profiles.json", "utf8");
    if (stringifiedProfiles) {
      const parsedJson = JSON.parse(stringifiedProfiles) as FileSystemProfile[];
      fs.writeFileSync("./src/data/profiles.json", JSON.stringify([...parsedJson, model]));
    } else {
      fs.writeFileSync("./src/data/profiles.json", JSON.stringify([model]));
    }
  }

  private parsedJson(): FileSystemProfile[] {
    const stringifiedProfiles = fs.readFileSync("./src/data/profiles.json", "utf8");
    return JSON.parse(stringifiedProfiles) as FileSystemProfile[];
  }

  public delete(profile: Profile): void {
    const parsedJson = this.parsedJson();

    parsedJson.forEach((profileItem: FileSystemProfile, index: number) => {
      if (profileItem.name === profile.getName()) {
        parsedJson.splice(index, 1);
      }
    });
    fs.writeFileSync("./src/data/profiles.json", JSON.stringify(parsedJson));
  }

  public update(profile: Profile): void {
    const parsedJson = this.parsedJson();

    parsedJson.forEach((profileItem: FileSystemProfile, index: number) => {
      if (profileItem.name === profile.getName()) {
        parsedJson[index] = profile.toPrimitives();
      }
    });

    fs.writeFileSync("./src/data/profiles.json", JSON.stringify(parsedJson));
  }

  public getProfiles(_query: object): Profile[] {
    return this.parsedJson().map((profile) =>
      Profile.fromPrimitives({
        name: profile.name,
        age: profile.age,
        gender: profile.gender,
      })
    );
  }
}
