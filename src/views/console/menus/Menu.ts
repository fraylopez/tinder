/* eslint-disable max-classes-per-file */
import assert from "assert";
import { IExecutableMenuView } from "./IExecutableMenuView";
import { MenuItemType } from "./MenuItemType";

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

  public getTitlte(): string {
    return this.title;
  }

  public acceptToExecute(view: IExecutableMenuView): void {
    view.executeMenu(this.items);
  }
}
