import { expect } from "chai";
import { Navigator, Transition } from "../../src/models/Navigator";

describe("Navigator test", () => {
  it("should start at the initial state", () => {
    const navigator = new Navigator();
    expect(navigator.getCurrentState()).eq("initial");
  });

  it("should transit from initial state to in app after login", () => {
    const navigator = new Navigator();
    navigator.transit(Transition.LOGIN);
    expect(navigator.getCurrentState()).eq("in-app");
  });

  it("should transit from initial state to in app after creating a user", () => {
    const navigator = new Navigator();
    navigator.transit(Transition.CREATE_USER);
    expect(navigator.getCurrentState()).eq("in-app");
  });

  it("should transit from in app to swipping after start swipping", () => {
    const navigator = new Navigator();
    navigator.transit(Transition.LOGIN);
    navigator.transit(Transition.START_SWIPPING);
    expect(navigator.getCurrentState()).eq("swipping");
  });
});
