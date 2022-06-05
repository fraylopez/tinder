import { expect } from "chai";
import { Navigator, State, Transition } from "../../src/models/Navigator";

describe("Navigator test", () => {
  it("should start at the initial state", () => {
    const navigator = new Navigator();
    expect(navigator.getCurrentState()).eq(State.INITIAL);
  });

  it("should transit from initial state to in app after login", () => {
    const navigator = new Navigator();
    navigator.transit(Transition.LOGIN);
    expect(navigator.getCurrentState()).eq(State.IN_APP);
  });

  it("should transit from initial state to in app after creating a user", () => {
    const navigator = new Navigator();
    navigator.transit(Transition.CREATE_USER);
    expect(navigator.getCurrentState()).eq(State.IN_APP);
  });

  it("should transit from in app to swipping after start swipping", () => {
    const navigator = new Navigator();
    navigator.transit(Transition.LOGIN);
    navigator.transit(Transition.START_SWIPPING);
    expect(navigator.getCurrentState()).eq(State.SWIPPING);
  });

  it("should be restarted with transitions", () => {
    const navigator = new Navigator();
    navigator.restart([Transition.LOGIN, Transition.START_SWIPPING]);
    expect(navigator.getCurrentState()).eq(State.SWIPPING);
  });

  it("should start with transitions", () => {
    const navigator = new Navigator([Transition.LOGIN, Transition.START_SWIPPING]);
    expect(navigator.getCurrentState()).eq(State.SWIPPING);
  });

  it("should transit from swipping to in app when swipe done", () => {
    const navigator = new Navigator([Transition.LOGIN, Transition.START_SWIPPING]);
    navigator.transit(Transition.SWIPE_DONE);
    expect(navigator.getCurrentState()).eq(State.IN_APP);
  });

  it("should navigate back", () => {
    const navigator = new Navigator([Transition.LOGIN, Transition.START_SWIPPING]);
    navigator.back();
    expect(navigator.getCurrentState()).eq(State.IN_APP);
  });

  it("should stay in app after login trying to go back", () => {
    const navigator = new Navigator([Transition.LOGIN]);
    navigator.back();
    expect(navigator.getCurrentState()).eq(State.IN_APP);
  });

  it("should stay in app after create user trying to go back", () => {
    const navigator = new Navigator([Transition.CREATE_USER]);
    navigator.back();
    expect(navigator.getCurrentState()).eq(State.IN_APP);
  });

  it("should transit from in app to profile after get profile transtion", () => {
    const navigator = new Navigator([Transition.CREATE_USER]);
    navigator.transit(Transition.GET_PROFILE);
    expect(navigator.getCurrentState()).eq(State.PROFILE);
  });
});
