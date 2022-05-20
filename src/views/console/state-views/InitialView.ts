import { ConsoleView } from "../ConsoleView";
import { StateView } from "./StateView";

class Menu extends ConsoleView {
  constructor(private options: string[]) {}
  render() {
    for (let i = 1; i <= this.options.length; i++) {
      const element = this.options[i];
      this.console.writeln()

    }
  }
}

export class InitialView extends StateView {
  render(): void {
    this.console.writeln(`this is initial view with controller ${this.controller.constructor.name}`);

    this.console.writeln("WELCOME TO TINDER🔥");
    this.console.writeln("Please, choose the option you want to perform [1/4]:");
    const options = [
      "Create a profile",
      "Login with an existing profile",
    ];
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
        default:
          this.console.writeln("Wrong input selected. Please, choose again [1/4]:");
      }
    } while (option !== 4);
  }
}
