import { SwipingStateController } from "../../../controllers/state/SwipingStateController";
import { Profile } from "../../../models/Profile";
import { ConsoleView } from "../ConsoleView";
import { SwipingView } from "./SwipingView";

export class SwipingProfilesView extends ConsoleView {
  constructor(private readonly controller: SwipingStateController) {
    super();
  }

  public render(): void {
    this.console.writeln("START SWIPING");
    const profiles: Profile[] = this.controller.getProfilesToSwipe();

    let follow = true;

    do {
      const profile = profiles.pop();
      new SwipingView(this.controller).render(profile!);
      follow = this.console.yesNoDialog("do you want to continue? (Y/N)");
    } while (profiles.length && follow);
    this.controller.back();
  }
}
