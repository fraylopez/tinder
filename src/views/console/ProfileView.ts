import { Profile } from "../../models/Profile";
import { Console } from "./Console";

export class ProfileView {
  private console: Console;
  constructor(private readonly profile: Profile) {
    this.console = new Console();
  }

  public async render(): Promise<void> {
    this.console.printString("PROFILE:")
    this.console.printString(`Name: ${this.profile.getName()}`);
    this.console.printString(`Age: ${this.profile.getAge()}`);
    this.console.printString(`Gender: ${this.profile.getGender()}`);
   
  }
}
