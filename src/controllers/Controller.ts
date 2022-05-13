export interface Controller<P, T = void> {
  control(...P): T;
}
