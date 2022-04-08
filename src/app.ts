import { UserInterfaceView } from "./views/UserInterfaceView";

export class Tinder {
  private uiView: UserInterfaceView;

  constructor() {
    this.uiView = new UserInterfaceView();
  }

  public render(): void {
    this.uiView.render();
  }
}

new Tinder().render();
