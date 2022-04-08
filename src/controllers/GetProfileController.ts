import { Profile, ProfileDocument } from "../models/Profile";
import * as fs from "fs";

export class GetProfileController {
  public control(name: string): Profile {
    const profiles = fs.readFileSync("./src/data/profiles.json", "utf8");

    if (profiles && profiles.length > 0) {
      const profile: ProfileDocument = JSON.parse(profiles).find(
        (profile: any) => profile.name === name
      );
      if (profile) {
        return new Profile(profile.name, profile.age);
      }
    }

    throw new Error("Profile with name " + name + " does not exist.");
  }
}
