import * as fs from "fs";

export interface ProfileDocument {
  name: string;
  age: number;
  gender: string;
}

export class LoginController {
  public control(name: string): void {
    const profiles = fs.readFileSync("./src/data/profiles.json", "utf8");
    if (profiles) {
      const array: ProfileDocument[] = JSON.parse(profiles);
      const foundUser = array.find(
        (profile: ProfileDocument) => profile.name === name
      );
      if (foundUser) {
        console.log(
          `Found user, ${foundUser.name}, ${foundUser.age}, ${foundUser.gender}`
        );
        console.log(`Logging in...`);
      } else {
        console.warn("User not found. Create an account first");
      }
    } else {
      console.error("Cannot found any profile in the DB");
    }
  }
}
