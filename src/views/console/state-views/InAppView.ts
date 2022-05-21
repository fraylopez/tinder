import { StateView } from "./StateView";

export class InAppView extends StateView {
  render(): void {
    this.console.writeln(`this is inapp view with controller ${this.controller.constructor.name}`);
    this.console.readString("press enter to continue");
  }
}
