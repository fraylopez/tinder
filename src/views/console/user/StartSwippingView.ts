import { StartSwippingController } from "../../../controllers/StartSwippingController";
import { FileSystemUserPersistenceService } from "../../../infrastructure/file-system/FileSystemUserPersistenceService";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { ConsoleView } from "../ConsoleView";
import { SwippingView } from "./SwippingView";

export class StartSwippingView extends ConsoleView {
  private readonly controller: StartSwippingController;

  constructor(private readonly user: User) {
    super();
    this.controller = new StartSwippingController(user, FileSystemUserPersistenceService.getInstance());
  }

  public render(): void {
    this.console.write("START SWIPPING");
    const candidates: Profile[] = this.controller.control();

    do {
      new SwippingView(this.user, candidates.pop()!).render();
    } while (candidates.length);
  }
}
