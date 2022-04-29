import { Profile } from "../models/Profile";
import * as fs from "fs";

export class GetProfileController {
  public control(name: string): Profile {
    const profiles = fs.readFileSync("./src/data/profiles.json", "utf8");
    const primitives = JSON.parse(profiles).find((profile: any) => profile.name === name);
    return Profile.fromPrimitives(primitives);
  }
}
