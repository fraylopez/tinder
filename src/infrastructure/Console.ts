import readline from "readline-sync";

export class Console {
  public clear(): void {
    console.clear();
  }

  public readInt(question: string | string[]): number {
    return Number(readline.question(question));
  }

  public readString(question: string): string {
    return readline.question(question);
  }

  public writeln(string: string = ""): void {
    process.stdout.write(string + "\n");
  }

  public write(string: string = ""): void {
    process.stdout.write(string);
  }

  public yesNoDialog(msg: string): boolean {
    const answer = this.readString(msg);
    return ["y", "Y", "yes"].includes(answer);
  }
}
