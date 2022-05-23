import { ConsoleView } from "../ConsoleView";
import { UnderAgeError } from "../../../models/UnderAgeError";
import { InitialStateController } from "../../../controllers/state/InitialStateController";

export class CreateProfileView extends ConsoleView {
  constructor(private controller: InitialStateController) {
    super();
  }

  public render(): void {
    this.console.write("CREATE PROFILE");
    const name = this.console.readString("Enter your name:");
    const age = this.console.readInt("Enter your age:");
    const gender = this.console.readString("Enter your gender [male/female]:");

    try {
      this.controller.createProfile(name, age, gender);
    } catch (error) {
      if (error instanceof UnderAgeError) {
        this.console.write("Controled under age user");
      }
    }
  }
}
