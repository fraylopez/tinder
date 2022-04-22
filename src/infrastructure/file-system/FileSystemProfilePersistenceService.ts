import * as fs from "fs";
import { Profile } from "../../models/Profile";
import { FileSystemProfile } from "./models/FileSystemProfile";

export class FileSystemProfilePersistenceService {
  public find(name: string): Profile | null {
    const profiles = fs.readFileSync("./src/data/profiles.json", "utf8");
    const array: FileSystemProfile[] = JSON.parse(profiles);    
    const foundUser = array.find(
      (profile: FileSystemProfile) => profile.name === name
    );
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
    const stringifiedProfiles = fs.readFileSync(
      "./src/data/profiles.json",
      "utf8"
    );
    if (stringifiedProfiles) {
      const parsedJson = JSON.parse(stringifiedProfiles);
      fs.writeFileSync(
        "./src/data/profiles.json",
        JSON.stringify([...parsedJson, model])
      );
    } else {
      fs.writeFileSync("./src/data/profiles.json", JSON.stringify([model]));
    }
  }

  public delete(profile: Profile): void {
    const stringifiedProfiles = fs.readFileSync(
      "./src/data/profiles.json",
      "utf8"
    );
    const parsedJson = JSON.parse(stringifiedProfiles);
    const filteredJson = parsedJson.filter(
      (p: FileSystemProfile) => p.name !== profile.getName()
    );
    fs.writeFileSync(
      "./src/data/profiles.json",
      JSON.stringify(filteredJson)
    );
  }
}
