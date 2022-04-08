import { Profile } from "../models/Profile";
import * as fs from "fs";

export class CreateProfileController {
  public control(name: string, age: number, gender: string): void {
    console.log(
      `[CONTROLLER]: Creating profile with this parameters... [Name: ${name}, Age: ${age}, Gender: ${gender} ]`
    );
    const profile = new Profile(name, age, gender);
    const stringifiedProfiles = fs.readFileSync(
      "./src/data/profiles.json",
      "utf8"
    );
    if (stringifiedProfiles) {
      const parsedJson = JSON.parse(stringifiedProfiles);
      fs.writeFileSync(
        "./src/data/profiles.json",
        JSON.stringify([...parsedJson, profile])
      );
    } else {
      fs.writeFileSync("./src/data/profiles.json", JSON.stringify([profile]));
    }
  }
}
