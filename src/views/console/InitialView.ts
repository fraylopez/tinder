import { ConsoleView } from "./ConsoleView";
import { UserView } from "./user/UserView";

export class InitialView extends ConsoleView {
  private userView: UserView;

  constructor() {
    super();
    this.userView = new UserView();
  }

  public render(): void {
    this.console.writeInln("WELCOME TO TINDER🔥");
    this.console.writeInln("Please, choose the option you want to perform [1/4]:");
    const options = "\n1- Create a profile\n" + 
    "2- Login with an existing profile\n" +
    "3- Delete profile\n" +
    "4- Exit\n";
    let option: number;
    do {
      option = this.console.readInt(options);
      switch (option) {
        case 1:
          this.userView.createProfile();
          break;
        case 2:
          this.userView.login();
          break;
        case 3:
          this.userView.deleteProfile();
          break;
        default:
          this.console.writeInln("Wrong input selected. Please, choose again [1/4]:");
      }
    } while (option !== 4);
  }
}
