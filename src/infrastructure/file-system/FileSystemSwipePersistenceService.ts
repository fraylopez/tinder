import * as fs from "fs";
import { Swipe } from "../../models/Swipe";
import { FileSystemSwipe } from "./models/FileSystemSwipe";


export class FileSystemSwipePersistenceService {
  public find(owner: string): Swipe[] {
    const swipes = fs.readFileSync("./src/data/swipes.json", "utf8");
    const array: FileSystemSwipe[] = JSON.parse(swipes);
    return array.map(element => {
      if (element.owner.name === owner) {
        return Swipe.fromPrimitives(element);
      }
    });
    // const foundSwipe = array.find((swipe: FileSystemSwipe) => swipe.owner.name === owner);
    // return foundSwipe
    //   ? Swipe.fromPrimitives({
    //     owner: foundSwipe.owner,
    //     candidate: foundSwipe.candidate,
    //     isRight: foundSwipe.isRight,
    //   })
    //   : null;
  }

  public create(swipe: Swipe): void {
    const primitives = swipe.toPrimitives();
    const model: FileSystemSwipe = {
      owner: primitives.owner,
      candidate: primitives.candidate,
      isRight: primitives.isRight,
    };
    const stringifiedSwipes = fs.readFileSync(
      "./src/data/swipes.json",
      "utf8"
    );
    if (stringifiedSwipes) {
      const parsedJson = JSON.parse(stringifiedSwipes);
      fs.writeFileSync(
        "./src/data/swipes.json",
        JSON.stringify([...parsedJson, model])
      );
    } else {
      fs.writeFileSync("./src/data/swipes.json", JSON.stringify([model]));
    }
  }
}
