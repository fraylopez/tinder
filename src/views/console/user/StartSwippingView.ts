import { GetCandidateProfilesController } from "../../../controllers/GetCandidateProfilesController";
import { FileSystemProfilePersistenceService } from "../../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { ConsoleView } from "../ConsoleView";
import { CandidateView } from "./CandidateView";

export class StartSwippingView extends ConsoleView {
  private readonly controller: GetCandidateProfilesController;

  constructor(private readonly user: User) {
    super();
    this.controller = new GetCandidateProfilesController(user, FileSystemProfilePersistenceService.getInstance());
  }

  public render(): void {
    this.console.writeInln("START SWIPPING");
    const candidates: Profile[] = this.controller.control();

    do {
      new CandidateView(this.user, candidates.pop()!).render();
    } while (candidates.length);
  }
}
