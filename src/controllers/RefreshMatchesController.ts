import { FileSystemMatchPersistenceService } from "../infrastructure/file-system/FileSystemMatchPersistenceService";
import { FileSystemSwipePersistenceService } from "../infrastructure/file-system/FileSystemSwipePersistenceService";
import { Match } from "../models/Match";
import { Profile } from "../models/Profile";

export class RefreshMatchesController {
  private profile: Profile;

  constructor(
    private swipePersistenceService: FileSystemSwipePersistenceService,
    private persistenceService: FileSystemMatchPersistenceService,
  ) {
    // TODO:
    this.profile = new Profile("owner-demo", 25, "male");
  }

  public control(): void {
    const swipes = this.swipePersistenceService.find(this.profile.getName());
    const matches = new Array<Match>();
    swipes.forEach(swipe => {
      if(swipe.isMatch()) {
        const candidateProfile = Profile.fromPrimitives(swipe.toPrimitives().candidate);
        const match = new Match();
        match.setProfiles([this.profile, candidateProfile]);
        matches.push(match);
      }
    });
    this.persistenceService.createMany(matches);
  }
}
