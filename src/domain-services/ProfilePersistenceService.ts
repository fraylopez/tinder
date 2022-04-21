import { Profile } from "../models/Profile";

// TO DEBT: idk where to place xd but is a domain service aka domain model repository
// TO DEBT: convenio interfaces con I?

export interface ProfilePersistenceService {
  findAll(): Profile[];
  find(name: string): Profile | null;
  create(profile: Profile): void;
}
