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
    this.console.print("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.console.print("[UIVIEW] - Please, choose the option you want to perform [1/2]:");
    const options = [
      "1- GetProfile",
    ]
    let option = await this.console.read(
      options
    );

    while (option !== "1") {
      this.console.print("[UIVIEW] - Wrong input selected. Please, choose again [1]:");
      option = await this.console.read(
        options
      );
    }
    if (option === "1") {
      this.getProfileView.render();
    }
  }
}
