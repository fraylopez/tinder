import { InitialStateController } from "../../server/controllers/state/InitialStateController";

export class TinderServices {
  createUser(name: string, age: number, gender: string): Promise<object> {
    return Promise.resolve(() => {
      new InitialStateController().createUser(name, age, gender);
      return {};
    }
    );
  }
}
