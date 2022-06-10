import { expect } from "chai";
import { Navigator } from "../../../src/models/navigation/Navigator";
import { State } from "../../../src/models/navigation/State";
import { Transition } from "../../../src/models/navigation/Transition";

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

  it("should transit from in app to swiping after start swiping", () => {
    const navigator = new Navigator();
    navigator.transit(Transition.LOGIN);
    navigator.transit(Transition.START_SWIPING);
    expect(navigator.getCurrentState()).eq(State.SWIPING);
  });

  it("should be restarted with transitions", () => {
    const navigator = new Navigator();
    navigator.restart([Transition.LOGIN, Transition.START_SWIPING]);
    expect(navigator.getCurrentState()).eq(State.SWIPING);
  });

  it("should start with transitions", () => {
    const navigator = new Navigator([Transition.LOGIN, Transition.START_SWIPING]);
    expect(navigator.getCurrentState()).eq(State.SWIPING);
  });
  it("should navigate back", () => {
    const navigator = new Navigator([Transition.LOGIN, Transition.START_SWIPING]);
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

  it("should transit from swiping to conversation after open conversation transtion", () => {
    const navigator = new Navigator([Transition.CREATE_USER, Transition.START_SWIPING]);
    navigator.transit(Transition.OPEN_CONVERSATION);
    expect(navigator.getCurrentState()).eq(State.CONVERSATION);
  });

  it("should transit from conversation to match list after get matches transtion", () => {
    const navigator = new Navigator([Transition.CREATE_USER, Transition.START_SWIPING, Transition.OPEN_CONVERSATION]);
    navigator.transit(Transition.GET_MATCHES);
    expect(navigator.getCurrentState()).eq(State.MATCH_LIST);
  });

  it("should move to initial state after logout", () => {
    const navigator = new Navigator([Transition.CREATE_USER, Transition.GET_PROFILE]);
    navigator.logout();
    expect(navigator.getCurrentState()).eq(State.INITIAL);
  });
});
