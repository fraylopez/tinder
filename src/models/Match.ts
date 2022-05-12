import { MatchPrimitives } from "./MatchPrimitives";
import { Profile } from "./Profile";

export class Match {
  private profiles: Profile[];

  public static fromPrimitives(primitives: MatchPrimitives): Match {
    const match = new Match();
    match.profiles = primitives.profiles.map(profile => Profile.fromPrimitives(profile));
    return match;
  }

  constructor(
  ) {
    this.profiles = new Array<Profile>();
  }

  public setProfiles(profiles: Profile[]) {
    this.profiles = profiles;
  }

  public toPrimitives(): MatchPrimitives {
    return {
      profiles: this.profiles.map(profile => profile.toPrimitives()),
    }
  }
}
