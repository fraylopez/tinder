import * as uuid from "uuid";
import { Match } from "./Match";
import { MatchesContainer } from "./MatchesContainer";
import { Profile } from "./Profile";
import { ProfilePrimitives } from "./ProfilePrimitives";
import { Swipe } from "./Swipe";
import { SwipeDirection } from "./SwipeDirection";
import { SwipesContainer } from "./SwipesContainer";
import { UserPrimitives } from "./UserPrimitives";

export class User {
  static fromPrimitives(primites: UserPrimitives): User {
    return new User(
      Profile.fromPrimitives(primites.profile),
      SwipesContainer.fromPrimitives(primites.swipes),
      MatchesContainer.fromPrimitives(primites.matches),
      primites.id
    );
  }

  private id: string;
  private profile: Profile;
  private swipesContainer: SwipesContainer;
  private matchesContainer: MatchesContainer;

  constructor(
    profile: Profile,
    swipeList: SwipesContainer = new SwipesContainer(),
    matches: MatchesContainer = new MatchesContainer(),
    id: string = uuid.v4()
  ) {
    this.id = id;
    this.profile = profile;
    this.swipesContainer = swipeList;
    this.matchesContainer = matches;
  }

  public swipe(direction: SwipeDirection, candidate: Profile): void {
    this.swipesContainer.add(direction, candidate);
  }

  public like(swipe: Swipe): void {
    const isMine = this.swipesContainer.in(swipe);
    if (isMine && swipe.canLike(this.profile)) {
      this.matchesContainer.add(new Match(swipe.getTo()));
    }
  }

  public getProfile(): Profile {
    return this.profile;
  }

  public getId(): string {
    return this.id;
  }

  public equals(profile: Profile): boolean {
    return this.profile.equals(profile);
  }

  public getName(): string {
    return this.profile.getName();
  }

  public updateProfile(profilePrimitives: ProfilePrimitives) {
    this.profile.updateWithPrimitives(profilePrimitives);
  }

  public toPrimitives(): UserPrimitives {
    return {
      id: this.id,
      profile: this.profile.toPrimitives(),
      swipes: this.swipesContainer.toPrimitives(),
      matches: this.matchesContainer.toPrimitives(),
    };
  }
}
