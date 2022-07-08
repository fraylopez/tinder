import { SwippingStateController } from "../../../controllers/state/SwippingStateController";
import { Profile } from "../../../models/Profile";
import { ConsoleView } from "../ConsoleView";
import { SwippingView } from "./SwippingView";

export class SwippingProfilesView extends ConsoleView {
  constructor(private readonly controller: SwippingStateController) {
    super();
  }

  public render(): void {
    this.console.writeln("START SWIPPING");
    const profiles: Profile[] = this.controller.getProfilesToSwipe();

    let follow = true;

    do {
      const profile = profiles.pop();
      new SwippingView(this.controller).render(profile!);
      follow = this.console.yesNoDialog("do you want to continue? (Y/N)");
    } while (profiles.length && follow);
    this.controller.back();
  }
}
