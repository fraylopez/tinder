import { ConsoleView } from "./ConsoleView";

export class Menu extends ConsoleView {
  constructor(private options: string[]) {
    super();
  }

  public execute(): number {
    let option = this.options.length;
    do {
      this.console.writeln(`Please, choose the option you want to perform [1/${this.options.length}]:`);
      for (let i = 0; i < this.options.length; i++) {
        this.console.writeln(`${i+1} - ${this.options[i]}`);
      }
      option = this.console.readInt(`option: `);
    } while (option < 1 || option > this.options.length);

    return option;
  }
}
