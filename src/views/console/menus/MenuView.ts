import { ConsoleView } from "../ConsoleView";
import { IExecutableMenuView } from "./IExecutableMenuView";
import { IMenuItemAction } from "./IMenuItemAction";
import { MenuItemType } from "./MenuItemType";
import { Menu } from "./Menu";

export class MenuView extends ConsoleView implements IExecutableMenuView {
  constructor(private readonly menu: Menu) {
    super();
  }

  public render(): void {
    this.renderMenuItems(this.menu.getItems());
  }

  public executeMenu(items: MenuItemType[]): void {
    this.renderMenuItems(items);
  }

  public executeMenuItem(action: IMenuItemAction): void {
    action.execute();
  }

  private renderMenuItems(items: MenuItemType[]): void {
    items.forEach((menuItem: MenuItemType, index: number) => {
      this.console.writeln(`${index + 1}. ${menuItem.getTitlte()}`);
    });
    let option = -1;
    do {
      option = this.console.readInt("Choose an option: ");
    } while (option === -1 || option - 1 >= this.menu.totalItems);

    const menuItem = this.menu.getItem(option - 1);
    menuItem.acceptToExecute(this);
  }
}
