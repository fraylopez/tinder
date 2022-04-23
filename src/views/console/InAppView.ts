import { GetProfileView } from "./GetProfileView";
import { Console } from "../../infrastructure/Console";
import { ConsoleView } from "./ConsoleView";

export class InAppView extends ConsoleView {
  private getProfileView: GetProfileView;

  constructor() {
    super();
    this.getProfileView = new GetProfileView();
  }

  public async render(): Promise<void> {
    this.printString("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.printString("[UIVIEW] - Please, choose the option you want to perform [1/2]:");
    const options = [
      "1- GetProfile",
    ]
    let option = await this.readString(
      options
    );

    while (option !== "1") {
      this.printString("[UIVIEW] - Wrong input selected. Please, choose again [1]:");
      option = await this.readString(
        options
      );
    }
    if (option === "1") {
      this.getProfileView.render();
    }
  }
}
