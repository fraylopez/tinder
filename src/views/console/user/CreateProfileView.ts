import { ConsoleView } from "../ConsoleView";
import { UnderAgeError } from "../../../models/UnderAgeError";
import { CreateProfileController } from "../../../controllers/CreateProfileController";

export class CreateProfileView extends ConsoleView {
  constructor(private controller: CreateProfileController) {
    super();
  }

  public render(): void {
    this.console.writeln("CREATE PROFILE");
    const name = this.console.readString("Enter your name:");
    const age = this.console.readInt("Enter your age:");
    const gender = this.console.readString("Enter your gender [male/female]:");

    try {
      this.controller.control(name, age, gender);
    } catch (error) {
      if (error instanceof UnderAgeError) {
        this.console.writeln("Controled under age user");
      }
    }
  }
}
