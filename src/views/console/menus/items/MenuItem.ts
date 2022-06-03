import { IExecutableMenuView } from "../actions/IExecutableMenuView";
import { IMenuItemAction } from "../actions/IMenuItemAction";

export abstract class MenuItem {
  constructor(private readonly title: string, private readonly action: IMenuItemAction) {}

  public execute(): void {
    this.action.execute();
  }

  public getTitle(): string {
    return this.title;
  }

  public acceptToExecute(view: IExecutableMenuView): void {
    view.executeMenuItem(this.action);
  }
}
