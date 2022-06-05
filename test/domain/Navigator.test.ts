import { expect } from "chai";
import { Navigator } from "../../src/models/Navigator";

describe("Navigator test", () => {
  it("should start at the initial state", () => {
    const navigator = new Navigator();
    expect(navigator.getCurrentState()).eq("initial");
  });

  it("should transit from initial state to in app after login", () => {
    const navigator = new Navigator();
    navigator.transit("login");
    expect(navigator.getCurrentState()).eq("in-app");
  });

  it("should transit from initial state to in app after creating a user", () => {
    const navigator = new Navigator();
    navigator.transit("create-user");
    expect(navigator.getCurrentState()).eq("in-app");
  });

  it("should transit from in app to swipping after start swipping", () => {
    const navigator = new Navigator();
    navigator.transit("login");
    navigator.transit("start-swipping");
    expect(navigator.getCurrentState()).eq("swipping");
  });
});
