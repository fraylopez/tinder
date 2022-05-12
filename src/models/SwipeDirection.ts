import { EnumValueObject } from "./EnumValueObject";
import { ESwipeDirection } from "./ESwipeDirection";


export class SwipeDirection extends EnumValueObject<ESwipeDirection> {
  public static fromPrimitives(value: ESwipeDirection): SwipeDirection {
    return new SwipeDirection(ESwipeDirection, value);
  }
  
  public isRight(): boolean {
    return this.value === ESwipeDirection.RIGHT;
  }
}
