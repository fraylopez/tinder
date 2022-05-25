// import { FileSystemProfilePersistenceService } from "../infrastructure/file-system/FileSystemProfilePersistenceService";
// import { Profile } from "../models/Profile";
// import { ProfilePrimitives } from "../models/ProfilePrimitives";
// import { Controller } from "./Controller";
// import { LoginController } from "./LoginController";
// import { ProfileController } from "./state/ProfileController";

// export class UserController {
//   private readonly profileController: ProfileController;
//   private readonly loginController: LoginController;

//   constructor(persistenceService: FileSystemProfilePersistenceService) {
//     this.profileController = new ProfileController(persistenceService);
//     this.loginController = new LoginController(persistenceService);
//   }

//   public getLoginController(): LoginController {
//     return this.loginController;
//   }

//   public getCreateProfileController(): Controller<[name: string, age: number, gender: string], void> {
//     return this.profileController.getCreateProfileController();
//   }

//   public getGetProfileController(): Controller<[name: string], Profile | null> {
//     return this.profileController.getGetProfileController();
//   }

//   public getDeleteProfileController(): Controller<[name: string], void> {
//     return this.profileController.getDeleteProfileController();
//   }


//   public getEditProfileController(): Controller<[name: string, profilePrimitives: ProfilePrimitives], void> {
//     return this.profileController.getEditProfileController();
//   }
// }
