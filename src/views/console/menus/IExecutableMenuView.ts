import { MenuItemType } from "./MenuItemType";
import { IMenuItemAction } from "./IMenuItemAction";

export interface IExecutableMenuView {
  executeMenu(items: MenuItemType[]): void;
  executeMenuItem(action: IMenuItemAction): void;
}
