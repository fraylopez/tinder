import { Profile } from "../models/Profile";
import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { CreateProfileController } from "./CreateProfileController";
import { DeleteProfileController } from "./DeleteProfileController";
import { EditProfileController } from "./EditProfileController";
import { GetProfileController } from "./GetProfileController";

export class ProfileController {
  public readonly getProfileController: GetProfileController;
  private deleteProfileController: DeleteProfileController;
  public readonly createProfileController: CreateProfileController;
  private editProfileController: EditProfileController;
  constructor() {}

  public get(name: string): Profile | null {
    return this.getProfileController.control(name);
  }
  public create(name: string, age: number, gender: string): void {
    this.createProfileController.control(name, age, gender);
  }
  public delete(name: string): void {
    this.deleteProfileController.control(name);
  }
  public edit(name: string, profilePrimitives: ProfilePrimitives): void {
    this.editProfileController.control(name, profilePrimitives);
  }
}
