/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ConsoleView } from "../ConsoleView";
import { UnderAgeError } from "../../../../server/models/UnderAgeError";
import { InitialStateController } from "../../../../server/controllers/state/InitialStateController";
import { error } from "console";
import EventEmitter from 'events';
import { TinderServices } from "../../../insfrastructure/TinderServices";

abstract class ReactComponent<TState> extends ConsoleView {
  private eventEmiter: EventEmitter;
  protected state?: TState;

  constructor() {
    super();
    this.eventEmiter = new EventEmitter();
    this.eventEmiter.on('change', () => this.render());
    this.mount();
  }

  private mount() {
    void this.componentDidMount();
    this.eventEmiter.emit('change');
  }
  protected setState(state: TState) {
    this.state = state;
    this.eventEmiter.emit('change');
  }
  abstract componentDidMount(): void | Promise<void>;
  abstract render(): void;
}

export class CreateUserView extends ReactComponent<{
  name: string;
  gender: string;
  age: number;
}> {
  private result?: { error?: any; } | void;

  constructor(private controller: TinderServices) {
    super();
  }

  async componentDidMount() {
    const { name, age, gender } = this.state!;
    this.result = await this.controller.createUser(name, age, gender);
  }

  public render(): void {
    if (!this.result) {
      this.console.writeln("CREATING THE USER - ADDING PROFILE DATA");
      const name = this.console.readString("Enter your name: ");
      const age = this.console.readInt("Enter your age: ");
      const gender = this.console.readString("Enter your gender [male/female]: ");
      this.setState({ name, age, gender });
    }
    else {
      this.renderResult();
    }

  }

  private renderResult() {
    if (this.result?.error) {
      if (error instanceof UnderAgeError) {
        this.console.write("Controled under age user");
        return;
      }
    }
    else {
      this.console.write("User created");
    }
  }
}
