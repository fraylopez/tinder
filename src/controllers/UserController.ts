import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { CreateProfileController } from "./CreateProfileController";
import { DeleteProfileController } from "./DeleteProfileController";
import { EditProfileController } from "./EditProfileController";
import { GetProfileController } from "./GetProfileController";
import { LoginController } from "./LoginController";
import { ProfileController } from "./ProfileController";

export class UserController {
  public readonly profileController: ProfileController;
  public readonly loginController: LoginController;

  constructor() {
    this.profileController = new ProfileController();
  }

  public getGetProfileController(): GetProfileController {
    return this.profileController.getGetProfileController();
  }

  public getDeleteProfileController(): DeleteProfileController {
    return this.profileController.getDeleteProfileController();
  }

  public getCreateProfileController(): CreateProfileController {
    return this.profileController.getCreateProfileController();
  }

  public getEditProfileController(): EditProfileController {
    return this.profileController.getEditProfileController();
  }

  public get(name: string): void {
    throw new Error("Method not implemented.");
  }

  public create(name: string, age: number, gender: string): void {
    throw new Error("Method not implemented.");
  }

  public delete(name: string): void {
    throw new Error("Method not implemented.");
  }

  public edit(name: string, profilePrimitives: ProfilePrimitives): void {
    throw new Error("Method not implemented.");
  }
}
