import { LoginView } from "./LoginView";
import { CreateProfileView } from "./CreateProfileView";
import { DeleteProfileView } from "./DeleteProfileView";
import { EditProfileView } from "./EditProfileView";
import { GetProfileView } from "./GetProfileView";
import { ProfileView } from "./ProfileView";
import { ConsoleView } from "../ConsoleView";
import { UserController } from "../../../controllers/UserController";
import { StartSwippingView } from "./StartSwippingView";
import { CandidateView } from "./CandidateView";

export class UserView extends ConsoleView {
  private loginView: LoginView;
  private createProfileView: CreateProfileView;
  private editProfileView: EditProfileView;
  private deleteProfileView: DeleteProfileView;
  private getProfileView: GetProfileView;
  private startSwippingView: StartSwippingView;
  private candidateView: CandidateView;

  constructor(controller: UserController) {
    super();
    this.loginView = new LoginView(controller.getLoginController());
    this.createProfileView = new CreateProfileView(controller.getCreateProfileController());
    this.editProfileView = new EditProfileView(controller.getEditProfileController());
    this.deleteProfileView = new DeleteProfileView(controller.getDeleteProfileController());
    this.getProfileView = new GetProfileView(new ProfileView(), controller.getGetProfileController());
  }

  public render(): void {
    this.console.writeInln("WELCOME TO TINDER🔥");
    this.console.writeInln("Please, choose the option you want to perform [1/4]:");
    const options =
      "\n1- Create a profile\n" + "2- Login with an existing profile\n" + "3- Delete profile\n" + "4- Exit\n";
    let option: number;
    do {
      option = this.console.readInt(options);
      switch (option) {
        case 1:
          this.createProfile();
          break;
        case 2:
          this.login();
          break;
        case 3:
          this.deleteProfile();
          break;
        default:
          this.console.writeInln("Wrong input selected. Please, choose again [1/4]:");
      }
    } while (option !== 4);
  }

  private login(): void {
    this.loginView.render();
  }

  private createProfile(): void {
    this.createProfileView.render();
  }

  private editProfile(): void {
    this.editProfileView.render();
  }

  private deleteProfile(): void {
    this.deleteProfileView.render();
  }

  private getProfile(): void {
    this.getProfileView.render();
  }
}
