import { MenuItemType } from "../items/MenuItemType";
import { IMenuItemAction } from "./IMenuItemAction";

export interface IExecutableMenuView {
  executeMenu(title: string, items: MenuItemType[]): void;
  executeMenuItem(action: IMenuItemAction): void;
}
