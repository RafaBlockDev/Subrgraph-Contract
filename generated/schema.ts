// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ClaimTokens extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("businessAction", Value.fromString(""));
    this.set("dayId", Value.fromString(""));
    this.set("monthId", Value.fromString(""));
    this.set("yearId", Value.fromString(""));
    this.set("mainActor", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("invoiceLink", Value.fromString(""));
    this.set("workArea", Value.fromString(""));
    this.set("country", Value.fromString(""));
    this.set("block", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ClaimTokens entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ClaimTokens entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ClaimTokens", id.toString(), this);
    }
  }

  static load(id: string): ClaimTokens | null {
    return changetype<ClaimTokens | null>(store.get("ClaimTokens", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get businessAction(): string {
    let value = this.get("businessAction");
    return value!.toString();
  }

  set businessAction(value: string) {
    this.set("businessAction", Value.fromString(value));
  }

  get dayId(): string {
    let value = this.get("dayId");
    return value!.toString();
  }

  set dayId(value: string) {
    this.set("dayId", Value.fromString(value));
  }

  get monthId(): string {
    let value = this.get("monthId");
    return value!.toString();
  }

  set monthId(value: string) {
    this.set("monthId", Value.fromString(value));
  }

  get yearId(): string {
    let value = this.get("yearId");
    return value!.toString();
  }

  set yearId(value: string) {
    this.set("yearId", Value.fromString(value));
  }

  get mainActor(): string {
    let value = this.get("mainActor");
    return value!.toString();
  }

  set mainActor(value: string) {
    this.set("mainActor", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get invoiceLink(): string {
    let value = this.get("invoiceLink");
    return value!.toString();
  }

  set invoiceLink(value: string) {
    this.set("invoiceLink", Value.fromString(value));
  }

  get workArea(): string {
    let value = this.get("workArea");
    return value!.toString();
  }

  set workArea(value: string) {
    this.set("workArea", Value.fromString(value));
  }

  get country(): string {
    let value = this.get("country");
    return value!.toString();
  }

  set country(value: string) {
    this.set("country", Value.fromString(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}
