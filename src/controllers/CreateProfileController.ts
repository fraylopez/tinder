import * as fs from "fs";

import { Profile } from "../models/Profile";

export class CreateProfileController {
  public control(name: string, age: number): void {
    const profile = new Profile(name, age);

    const stringifiedProfiles = fs.readFileSync(
      "./src/data/profiles.json",
      "utf8"
    );

    if (stringifiedProfiles && stringifiedProfiles.length > 0) {
      const profiles = JSON.parse(stringifiedProfiles);
      fs.writeFileSync(
        "./src/data/profiles.json",
        JSON.stringify([...profiles, profile.serialize()])
      );
    } else {
      fs.writeFileSync(
        "./src/data/profiles.json",
        JSON.stringify([profile.serialize()])
      );
    }
  }
}
