import { StateView } from "./StateView";

export class MatchListView extends StateView {
  render(): void {
    this.console.writeln(`this is match list view with controller ${this.controller.constructor.name}`);
  }
}
