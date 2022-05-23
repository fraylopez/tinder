import { IExecutableMenuView } from "./IExecutableMenuView";
import { IMenuItemAction } from "./IMenuItemAction";

export abstract class MenuItem {
  constructor(private readonly title: string, private readonly action: IMenuItemAction) {}

  public execute(): void {
    this.action.execute();
  }

  public getTitlte(): string {
    return this.title;
  }

  public acceptToExecute(view: IExecutableMenuView): void {
    view.executeMenuItem(this.action);
  }
}
