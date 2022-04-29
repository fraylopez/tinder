import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { CreateProfileController } from "./CreateProfileController";
import { DeleteProfileController } from "./DeleteProfileController";
import { EditProfileController } from "./EditProfileController";
import { GetProfileController } from "./GetProfileController";

export class ProfileController {
  private getProfileController: GetProfileController;
  private deleteProfileController: DeleteProfileController;
  private createProfileController: CreateProfileController;
  private editProfileController: EditProfileController;
  constructor() {}

  public get(name: string) {
    this.getProfileController.control(name);
  }
  public create(name: string, age: number, gender: string) {
    this.createProfileController.control(name, age, gender);
  }
  public delete(name: string) {
    this.deleteProfileController.control(name, true); // TODO!
  }
  public edit(name: string, profilePrimitives: ProfilePrimitives) {
    this.editProfileController.control(name, profilePrimitives);
  }
}
