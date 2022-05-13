import { ProfilePrimitives } from "./ProfilePrimitives";
import { SwipePrimitives } from "./SwipePrimitives";

export interface UserPrimitives {
  id: string;
  profile: ProfilePrimitives;
  swipes: SwipePrimitives[];
}