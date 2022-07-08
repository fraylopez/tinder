import { ConsoleView } from "../ConsoleView";
import { UnderAgeError } from "../../../models/UnderAgeError";
import { InitialStateController } from "../../../controllers/state/InitialStateController";

export class CreateUserView extends ConsoleView {
  constructor(private controller: InitialStateController) {
    super();
  }

  public render(): void {
    this.console.writeln("CREATING THE USER - ADDING PROFILE DATA");
    const name = this.console.readString("Enter your name: ");
    const age = this.console.readInt("Enter your age: ");
    const gender = this.console.readString("Enter your gender [male/female]: ");

    try {
      this.controller.createUser(name, age, gender);
    } catch (error) {
      if (error instanceof UnderAgeError) {
        this.console.write("Controled under age user");
        return;
      }
      throw error;
    }
  }
}
