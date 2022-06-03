/* eslint-disable max-classes-per-file */
import { Profile } from "./Profile";
import { Swipe } from "./Swipe";
import { SwipeList } from "./SwipeList";
import { UserPrimitives } from "./UserPrimitives";

export class User {
  private id: string;
  private profile: Profile;
  private swipeList: SwipeList;
  private matches: Match[];

  constructor(profile: Profile, swipeList: SwipeList, matches: Match[] = []) {
    this.id = profile.getName();
    this.profile = profile;
    this.swipeList = swipeList;
    this.matches = matches;
  }

  public swipe(direction: boolean, candidate: Profile): void {
    this.swipeList.add(new Swipe(direction, this.profile, candidate));
  }

  public like(swipe: Swipe): void {
    const isMine = this.swipeList.in(swipe);
    if (isMine && swipe.canLike(this.profile)) {
      this.matches.push(new Match(swipe));
    }
  }

  public startConversation(profile: Profile): void {
    throw new Error("Method not implemented.");
  }

  public getId(): string {
    return this.id;
  }

  public equals(profile: Profile): boolean {
    return this.profile.equals(profile);
  }

  public toPrimitives(): UserPrimitives {
    return {
      id: this.id,
      profile: this.profile.toPrimitives(),
    };
  }
}

class Match {
  constructor(private readonly swipe: Swipe) {}
}
