import { Console } from "../../infrastructure/Console";

export class ConsoleView {
  private console: Console;

  constructor() {
    this.console = new Console();
  }

  public async readString(arrayMsg: string[]): Promise<string> {
    return await this.console.readString(arrayMsg);
  }

  public printString(input: string): void {
    this.console.printString(input);
  }
}
