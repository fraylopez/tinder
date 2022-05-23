import { ProfileStateController } from "../../../controllers/state/ProfileStateController";
import { ConsoleView } from "../ConsoleView";

export class EditProfileView extends ConsoleView {
  constructor(private controller: ProfileStateController) {
    super();
  }

  public render(): void {
    this.console.writeln("Editing profile");
    const name = this.console.readString("Enter new name: ");
    const age = this.console.readInt("Enter new age: ");
    const gender = this.console.readString("Enter your new gender [male/female]: ");
    this.controller.editProfile(name, age, gender);
  }
}
