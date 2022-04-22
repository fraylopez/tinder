import { GetProfileView } from "./GetProfileView";
import { Console } from "./Console";
import { CreateProfileView } from "./CreateProfileView";
import { LoginView } from "./LoginView";

export class InAppView {
  private console: Console;
  private getProfileView: GetProfileView;

  constructor() {
    this.console = new Console();
    this.getProfileView = new GetProfileView();
  }

  public async render(): Promise<void> {
    this.console.printString("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.console.printString("[UIVIEW] - Please, choose the option you want to perform [1/2]:");
    const options = [
      "1- GetProfile",
    ]
    let option = await this.console.readString(
      options
    );

    while (option !== "1") {
      this.console.printString("[UIVIEW] - Wrong input selected. Please, choose again [1]:");
      option = await this.console.readString(
        options
      );
    }
    if (option === "1") {
      this.getProfileView.render();
    } 
  }
}
