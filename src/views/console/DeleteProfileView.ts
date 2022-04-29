import { DeleteProfileController } from "../../controllers/DeleteProfileController";
import { ConsoleView } from "./ConsoleView";
export class DeleteProfileView extends ConsoleView {
  constructor(private readonly controller: DeleteProfileController) {
    super();
  }

  public async render(): Promise<void> {
    this.console.print("\n\n[DELETE PROFILE]\n");

    const name = await this.console.read(["Enter your name:\n"]);
    const confirmed = await this.console.read(["Are you sure? [y/n]:\n"]);
    const wasDeleted = this.controller.control(name, confirmed === "y");

    if (wasDeleted) {
      console.log("Profile deleted!");
    } else {
      console.log("Profile not deleted!");
    }
  }
}
