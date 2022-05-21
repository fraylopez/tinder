import { StateView } from "./StateView";


export class SwippingView extends StateView {
  render(): void {
    this.console.writeln(`this is swipping view with controller ${this.controller.constructor.name}`);
  }
}
