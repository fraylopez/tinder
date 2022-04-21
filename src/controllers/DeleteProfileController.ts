import { Profile } from "../models/Profile";
import * as fs from "fs";

export class DeleteProfileController {
    public control(name: string): void {
        const profiles = fs.readFileSync("./src/data/profiles.json", "utf8");
        JSON.parse(profiles).delete((profile: any) => profile.name === name);
        
    // const profileToDelete =  JSON.parse(profiles).find((profile: any) => profile.name === name);
    // if (profileToDelete) {
    //     fs.writeFileSync(
    //       "./src/data/profiles.json",
    //       JSON.stringify([...parsedJson, profile])
    //     );
    // }
  }
}
