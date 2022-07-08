import * as uuid from "uuid";
import { FileSystemUserPersistenceService } from "../../infrastructure/file-system/FileSystemUserPersistenceService";
import { Session } from "../../models/Session";
import { CreateUserController } from "../CreateUserController";
import { GetUserController } from "../GetUserController";
import { LoginController } from "../LoginController";
import { StateController } from "./StateControllers";

export class InitialStateController extends StateController {
  private readonly createUserController: CreateUserController;
  private readonly loginController: LoginController;
  private readonly getUserController: GetUserController;

  constructor() {
    super(new Session());
    this.createUserController = new CreateUserController(FileSystemUserPersistenceService.getInstance());
    this.loginController = new LoginController(FileSystemUserPersistenceService.getInstance());
    this.getUserController = new GetUserController(FileSystemUserPersistenceService.getInstance());
  }

  public login(name: string): void {
    const user = this.loginController.control(name);
    if (user) {
      this.session.login(user);
    }
  }

  public createUser(name: string, age: number, gender: string): void {
    const id = uuid.v4();
    this.createUserController.control(name, age, gender, id);
    const user = this.getUserController.control(id);
    this.session.login(user!);
  }
}
