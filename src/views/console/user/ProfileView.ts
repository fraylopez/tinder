import { ConsoleView } from "../ConsoleView";
import { Profile } from "../../../models/Profile";

export class ProfileView extends ConsoleView {
  public render(profile: Profile): void {
    this.console.write(`profile: ${profile.getName()}`);
  }
}
