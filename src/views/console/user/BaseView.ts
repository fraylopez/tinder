import { Session } from "./Session";

export abstract class BaseView {
  constructor(private readonly session: Session) {}

  public render(): void {
    // do SOMETHING
  }

  public canRender(state: string): boolean {
    return true;
  }
}
