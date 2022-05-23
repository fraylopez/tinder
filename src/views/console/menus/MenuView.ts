import { ConsoleView } from "../ConsoleView";
import { IExecutableMenuView } from "./actions/IExecutableMenuView";
import { IMenuItemAction } from "./actions/IMenuItemAction";
import { MenuItemType } from "./items/MenuItemType";
import { Menu } from "./Menu";

export class MenuView extends ConsoleView implements IExecutableMenuView {
  constructor(private readonly menu: Menu) {
    super();
  }

  public render(): void {
    this.renderMenuItems(this.menu.getTitle(), this.menu.getItems());
  }

  public executeMenu(title: string, items: MenuItemType[]): void {
    this.renderMenuItems(title, items);
  }

  public executeMenuItem(action: IMenuItemAction): void {
    action.execute();
  }

  private renderMenuItems(title: string, items: MenuItemType[]): void {
    items.forEach((menuItem: MenuItemType, index: number) => {
      this.console.writeln(`${index + 1}. ${menuItem.getTitle()}`);
    });
    let option = -1;
    do {
      option = this.console.readInt(`${title} [1/${items.length}]: `);
    } while (option === -1 || option - 1 >= this.menu.totalItems);

    const menuItem = this.menu.getItem(option - 1);
    menuItem.acceptToExecute(this);
  }
}
