import { StateView } from "./StateView";

export class ProfileView extends StateView {
  render(): void {
    this.console.writeln(`this is profile view with controller ${this.controller.constructor.name}`);
  }
}
