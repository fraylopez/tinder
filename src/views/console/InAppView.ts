import { GetProfileView } from "./GetProfileView";
import { ConsoleView } from "./ConsoleView";
import { GetProfileController } from "../../controllers/GetProfileController";

export class InAppView extends ConsoleView {
  private getProfileView: GetProfileView;

  constructor() {
    super();
    this.getProfileView = new GetProfileView(new GetProfileController());
  }

  public render(): void {
    this.console.writeInln("WELCOME TO TINDER🔥");
    this.console.writeInln("Please, choose the option you want to perform [1/2]:");
    const options = "1- GetProfile\n";
    let option = this.console.readInt(options);
    while (option !== 1) {
      this.console.writeInln("Wrong input selected. Please, choose again [1]:");
      option = this.console.readInt(options);
    }
    if (option === 1) {
      this.getProfileView.render();
    }
  }
}
