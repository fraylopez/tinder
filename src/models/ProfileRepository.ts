import { Profile } from "./Profile";

export interface ProfileRepository {
  find(name: string): Profile | null;
  create(profile: Profile): void;
  delete(profile: Profile): void;
  update(profile: Profile): void;
}
