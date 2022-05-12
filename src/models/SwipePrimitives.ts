import { ProfilePrimitives } from "./ProfilePrimitives";

export interface SwipePrimitives {
  owner: ProfilePrimitives;
  candidate: ProfilePrimitives;
  isRight: boolean;
}
