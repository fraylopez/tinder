import * as fs from "fs";
import { Match } from "../../models/Match";
import { FileSystemMatch } from "./models/FileSystemMatch";

export class FileSystemMatchPersistenceService {
  public find(name: string): Match | null {
    const matches = fs.readFileSync("./src/data/matches.json", "utf8");
    const array: FileSystemMatch[] = JSON.parse(matches);
    const foundMatch = array.find(
      (match: FileSystemMatch) => {
        match.profiles.find(profile => profile.name === name);
      }
    );
    return foundMatch
      ? Match.fromPrimitives({
        profiles: foundMatch.profiles,
      })
      : null;
  }

  public create(match: Match): void {
    const primitives = match.toPrimitives();
    const model: FileSystemMatch = {
      profiles: primitives.profiles,
    };
    const stringifiedMatches = fs.readFileSync(
      "./src/data/matches.json",
      "utf8"
    );
    if (stringifiedMatches) {
      const parsedJson = JSON.parse(stringifiedMatches);
      fs.writeFileSync(
        "./src/data/matches.json",
        JSON.stringify([...parsedJson, model])
      );
    } else {
      fs.writeFileSync("./src/data/matches.json", JSON.stringify([model]));
    }
  }

  public createMany(matches: Match[]) {
    for (const match of matches) {
      this.create(match);
    }
  }
}
