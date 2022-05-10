import { Controller } from "../../../controllers/Controller";
import { ConsoleView } from "../ConsoleView";

export class DeleteProfileView extends ConsoleView {
  constructor(private readonly controller: Controller<[name: string], void>) {
    super();
  }

  public render(): void {
    this.console.writeInln("DELETE PROFILE");
    const name = this.console.readString("Enter your name:");
    if (this.console.yesNoDialog("Are you sure? [y/n]:")) {
      this.controller.control(name);
      console.log("Profile deleted!");
    } else {
      console.log("Profile not deleted!");
    }
  }
}
