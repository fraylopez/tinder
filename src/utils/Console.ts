import { createInterface } from "readline";

export class Console {

  public async readString(msg: string): Promise<string> {
    const rl = createInterface( process.stdin, process.stdout );
    return new Promise<string>( (res, rej) => {
      rl.question(msg, input => {
          // check input?
          res(input);
          rl.close();
      });
    });
  }

  public async readNumber(msg: string): Promise<number> {
    const rl = createInterface( process.stdin, process.stdout );
    return new Promise<number>( (res, rej) => {
      rl.question(msg, input => {
          // check input?
          res(Number(input));
          rl.close();
      });
    });
  }

  public print(msg: string): void {
    console.log(msg);
  }

  public async yesNoDialog(msg: string): Promise<boolean> {
    const answer = await this.readString(msg);
    return ["y", "Y", "yes"].includes(answer);
  }

}
