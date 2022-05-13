import { ProfilePrimitives } from "../models/ProfilePrimitives";
import { LoginController } from "./LoginController";
import { ProfileController } from "./ProfileController";
import { StartSwippingController } from "./StartSwippingController";
import { SwippingController } from "./SwipingController";

export class UserController {
  public readonly profileController: ProfileController;
  public readonly loginController: LoginController;
  public readonly swipeController: SwippingController;
  public readonly startSwipeController: StartSwippingController;

  constructor() {
    this.profileController = new ProfileController();
  }

  public control(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  public get(name: string): void {
    throw new Error("Method not implemented.");
  }
  public create(name: string, age: number, gender: string): void {
    throw new Error("Method not implemented.");
  }
  public delete(name: string): void {
    throw new Error("Method not implemented.");
  }
  public edit(name: string, profilePrimitives: ProfilePrimitives): void {
    throw new Error("Method not implemented.");
  }
}
