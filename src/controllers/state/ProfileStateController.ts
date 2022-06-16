import { FileSystemUserPersistenceService } from "../../infrastructure/file-system/FileSystemUserPersistenceService";
import { DeleteUserController } from "../DeleteUserController";
import { EditProfileController } from "../EditProfileController";
import { StateController } from "./StateControllers";

export class ProfileStateController extends StateController {
  public deleteProfile(): void {
    new DeleteUserController(this.session.getUser(), FileSystemUserPersistenceService.getInstance()).control();
    this.session.logOut();
  }

  public editProfile(name: string, age: number, gender: string): void {
    new EditProfileController(this.session.getUser(), FileSystemUserPersistenceService.getInstance()).control({
      name,
      age,
      gender,
    });
  }
}
