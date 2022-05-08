export interface Controller<P extends Array<unknown>, T = void> {
  control(...args: P): T;
}
