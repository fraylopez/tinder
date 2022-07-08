import { LoginController } from "../../server/controllers/LoginController";
import { CreateProfileController } from "../../server/controllers/CreateProfileController";
import { DeleteProfileController } from "../../server/controllers/DeleteProfileController";
import { EditProfileController } from "../../server/controllers/EditProfileController";
import { ProfilePrimitives } from "../../server/models/ProfilePrimitives";
import { UnderAgeError } from "../../server/models/UnderAgeError";
import { ProfileView } from "../views/console/user/ProfileView";
import { ConsoleView } from "../views/console/ConsoleView";

export class UserView extends ConsoleView {
  private profileView: ProfileView;

  private loginController: LoginController;
  private profileController: ProfileController;

  constructor() {
    super();
    const fileSystemProfilePersistenceService = new FileSystemProfilePersistenceService();
    this.profileView = new ProfileView();
    this.loginController = new LoginController(fileSystemProfilePersistenceService);
    this.profileController = new ProfileController(
      new GetProfileController(
        fileSystemProfilePersistenceService,
      ),
      new DeleteProfileController(
        fileSystemProfilePersistenceService,
      ),
      new CreateProfileController(
        fileSystemProfilePersistenceService,
      ),
      new EditProfileController(
        fileSystemProfilePersistenceService,
      ),
    );
  }

  public login(): void {
    this.console.writeInln("LOGIN");
    let logged = false;
    do {
      const name = this.console.readString("Enter your name to login:");
      logged = this.loginController.control(name);
      if (!logged) {
        this.console.writeInln("Wrong name, try again");
      }
    } while (!logged);
    this.console.writeInln(`Logged in 🐥`);
  }

  public createProfile(): void {
    this.console.writeInln("CREATE PROFILE");
    const name = this.console.readString("Enter your name:");
    const age = this.console.readInt("Enter your age:");
    const gender = this.console.readString("Enter your gender [male/female]:");
    try {
      this.profileController.create(name, age, gender);
    } catch (error) {
      if (error instanceof UnderAgeError) {
        this.console.writeInln("Controled under age user");
      }
    }
  }

  public editProfile(): void {
    this.console.writeInln("EDIT PROFILE");
    const existingName = this.console.readString("Enter existing name:");
    const name = this.console.readString("Enter new name:");
    const age = this.console.readInt("Enter new age:");
    const gender = this.console.readString("Enter your new gender [male/female]:");
    const profilePrimitives: ProfilePrimitives = {
      name,
      age: Number(age),
      gender,
    };
    const profile = this.profileController.get(existingName);
    if (profile) {
      this.profileController.edit(profile, profilePrimitives);
    }
  }

  public deleteProfile(): void {
    this.console.writeInln("DELETE PROFILE");
    const name = this.console.readString("Enter your name:");
    if (this.console.yesNoDialog("Are you sure? [y/n]:")) {
      this.profileController.delete(name);
      console.log("Profile deleted!");
    } else {
      console.log("Profile not deleted!");
    }
  }

  public getProfile(): void {
    const name = this.console.readString("What profile do you want to get? (Name)");
    const profile = this.profileController.get(name);
    if (profile) {
      this.profileView.render(profile);
    } else {
      this.console.writeInln("profile not found :/");
    }
  }
}
