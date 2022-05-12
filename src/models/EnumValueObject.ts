// TODO: where to locate this class?

export class EnumValueObject<TEnum> {
  constructor(
    enumerate: { [t: number]: string },
    private readonly _value: TEnum | string
  ) {
    this.validate(enumerate, _value);
  }

  protected validate(
    enumerate: { [t: number]: string },
    value: TEnum | string
  ): void {
    const strValue = (value as unknown) as string;
    if (!Object.values(enumerate).includes(strValue)) {
      throw new Error(`Value ${value} not in enum`);
    }
  }

  get value(): TEnum {
    return this._value as TEnum;
  }

  public equals(other: EnumValueObject<TEnum> | TEnum): boolean {
    if (other instanceof EnumValueObject) {
      return this.value === other.value;
    }
    return other === this.value;
  }
}
