import { ConsoleView } from "../ConsoleView";
import { UnderAgeError } from "../../../models/UnderAgeError";
import { Controller } from "./Controller";

export class CreateProfileView extends ConsoleView {
  constructor(private controller: Controller<[string, number, string]>) {
    super();
  }

  public render(): void {
    this.console.writeInln("CREATE PROFILE");
    const name = this.console.readString("Enter your name:");
    const age = this.console.readInt("Enter your age:");
    const gender = this.console.readString("Enter your gender [male/female]:");

    try {
      this.controller.control(name, age, gender);
    } catch (error) {
      if (error instanceof UnderAgeError) {
        this.console.writeInln("Controled under age user");
      }
    }
  }
}
