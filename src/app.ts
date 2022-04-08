import { InitialView } from "./views/console/InitialView";

export class Tinder {
  private uiView: InitialView;

  constructor() {
    this.uiView = new InitialView();
  }

  public render(): void {
    this.uiView.render();
  }
}

new Tinder().render();
