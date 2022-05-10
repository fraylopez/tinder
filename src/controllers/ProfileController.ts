import { Profile } from "../models/Profile";
import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { CreateProfileController } from "./CreateProfileController";
import { DeleteProfileController } from "./DeleteProfileController";
import { EditProfileController } from "./EditProfileController";
import { GetProfileController } from "./GetProfileController";

export class ProfileController {
  private readonly getProfileController: GetProfileController;
  private readonly deleteProfileController: DeleteProfileController;
  private readonly createProfileController: CreateProfileController;
  private readonly editProfileController: EditProfileController;

  public getGetProfileController(): GetProfileController {
    return this.getProfileController;
  }

  public getDeleteProfileController(): DeleteProfileController {
    return this.deleteProfileController;
  }

  public getCreateProfileController(): CreateProfileController {
    return this.createProfileController;
  }

  public getEditProfileController(): EditProfileController {
    return this.editProfileController;
  }
}
