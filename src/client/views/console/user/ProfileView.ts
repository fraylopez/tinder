import { ConsoleView } from "../ConsoleView";
import { Profile } from "../../../../server/models/Profile";

export class ProfileView extends ConsoleView {
  constructor(private readonly profile: Profile) {
    super();
  }

  public render(): void {
    this.console.writeln(`Your profile is: ${this.profile.getName()}`);
  }
}
