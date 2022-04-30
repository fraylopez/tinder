import { DeleteProfileController } from "../../controllers/DeleteProfileController";
import { ConsoleView } from "./ConsoleView";
export class DeleteProfileView extends ConsoleView {
  constructor(private readonly controller: DeleteProfileController) {
    super();
  }

  public render(): void {
    this.console.writeInln("DELETE PROFILE");
    const name = this.console.readString("Enter your name:");
    const confirmed = this.console.readString("Are you sure? [y/n]:");
    // TODO: confirmacion no le interesa al controlador
    const wasDeleted = this.controller.control(name, confirmed === "y");

    if (wasDeleted) {
      console.log("Profile deleted!");
    } else {
      console.log("Profile not deleted!");
    }
  }
}
