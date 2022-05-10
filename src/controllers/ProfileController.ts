import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
import { Profile } from "../models/Profile";
import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { Controller } from "./Controller";
import { CreateProfileController } from "./CreateProfileController";
import { DeleteProfileController } from "./DeleteProfileController";
import { EditProfileController } from "./EditProfileController";
import { GetProfileController } from "./GetProfileController";

export class ProfileController {
  private readonly getProfileController: GetProfileController;
  private readonly deleteProfileController: DeleteProfileController;
  private readonly createProfileController: CreateProfileController;
  private readonly editProfileController: EditProfileController;

  constructor(persistenceService: FileSystemProfilePersistenceService) {
    this.getProfileController = new GetProfileController(persistenceService);
    this.deleteProfileController = new DeleteProfileController(persistenceService);
    this.createProfileController = new CreateProfileController(persistenceService);
    this.editProfileController = new EditProfileController(this.getProfileController, persistenceService);
  }

  public getGetProfileController(): Controller<[name: string], Profile | null> {
    return this.getProfileController;
  }

  public getDeleteProfileController(): Controller<[name: string], void> {
    return this.deleteProfileController;
  }

  public getCreateProfileController(): Controller<[name: string, age: number, gender: string], void> {
    return this.createProfileController;
  }

  public getEditProfileController(): Controller<[name: string, profilePrimitives: ProfilePrimitives], void> {
    return this.editProfileController;
  }
}
