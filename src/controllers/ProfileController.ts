import { CreateProfileController } from "./CreateProfileController";
import { DeleteProfileController } from "./DeleteProfileController";
import { GetProfileController } from "./GetProfileController";

export class ProfileController {
  private getProfileController: GetProfileController;
  private deleteProfileController: DeleteProfileController;
  private createProfileController: CreateProfileController;
  //   private editProfileController: EditProfileController;
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
  //   public edit() {
  //     this.editProfileController.control();
  //   }
}
