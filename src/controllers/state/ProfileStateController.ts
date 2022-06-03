import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { DeleteProfileController } from "../DeleteProfileController";
import { EditProfileController } from "../EditProfileController";
import { StateController } from "./StateControllers";

export class ProfileStateController extends StateController {
  public deleteProfile(): void {
    new DeleteProfileController(this.session.getProfile(), FileSystemProfilePersistenceService.getInstance()).control();
    this.session.logOut();
  }

  public editProfile(name: string, age: number, gender: string): void {
    this.session.getProfile();
    new EditProfileController(this.session.getProfile(), FileSystemProfilePersistenceService.getInstance()).control({
      name,
      age,
      gender,
    });
  }
}
