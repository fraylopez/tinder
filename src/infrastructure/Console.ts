import { createInterface } from "readline";

export class Console {
  public async readString(arrayMsg: string[]): Promise<string> {
    const rl = createInterface(process.stdin, process.stdout);
    const msg = arrayMsg.join("\n").concat("\n");
    return new Promise<string>((res, rej) => {
      rl.question(msg, (input) => {
        res(input);
        rl.close();
      });
    });
  }

  public printString(input: string): void {
    const msg = `\n${input}\n`;
    if (input.startsWith("[UIVIEW]")) {
      console.log(msg.concat("\n"));
    } else {
      console.log(msg);
    }
  }

}
