import assert from "assert";
import { IExecutableMenuView } from "./actions/IExecutableMenuView";
import { MenuItemType } from "./items/MenuItemType";

export abstract class Menu {
  constructor(private readonly title: string, private readonly items: MenuItemType[]) {}

  public getItems(): MenuItemType[] {
    return this.items;
  }

  getItem(index: number): MenuItemType {
    assert(index >= 0 && index < this.items.length);
    return this.items[index];
  }

  public get totalItems(): number {
    return this.items.length;
  }

  public getTitle(): string {
    return this.title;
  }

  public acceptToExecute(view: IExecutableMenuView): void {
    view.executeMenu(this.title, this.items);
  }
}
