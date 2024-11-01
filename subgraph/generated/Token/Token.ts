// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get partner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get payer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get serial(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdrawal extends ethereum.Event {
  get params(): Withdrawal__Params {
    return new Withdrawal__Params(this);
  }
}

export class Withdrawal__Params {
  _event: Withdrawal;

  constructor(event: Withdrawal) {
    this._event = event;
  }

  get partner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get payer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get serial(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Token__allPartnersResult {
  value0: BigInt;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getSerial(): BigInt {
    return this.value0;
  }

  getPartner(): Address {
    return this.value1;
  }

  getPayer(): Address {
    return this.value2;
  }

  getBlockStaking(): BigInt {
    return this.value3;
  }

  getBlockWaitingWithdrawal(): BigInt {
    return this.value4;
  }

  getBalanceStaking(): BigInt {
    return this.value5;
  }
}

export class Token__partnerByIndexResult {
  value0: BigInt;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getSerial(): BigInt {
    return this.value0;
  }

  getPartner(): Address {
    return this.value1;
  }

  getPayer(): Address {
    return this.value2;
  }

  getBlockStaking(): BigInt {
    return this.value3;
  }

  getBlockWaitingWithdrawal(): BigInt {
    return this.value4;
  }

  getBalanceStaking(): BigInt {
    return this.value5;
  }
}

export class Token__partnerBySerialResult {
  value0: BigInt;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getSerial(): BigInt {
    return this.value0;
  }

  getPartner(): Address {
    return this.value1;
  }

  getPayer(): Address {
    return this.value2;
  }

  getBlockStaking(): BigInt {
    return this.value3;
  }

  getBlockWaitingWithdrawal(): BigInt {
    return this.value4;
  }

  getBalanceStaking(): BigInt {
    return this.value5;
  }
}

export class Token extends ethereum.SmartContract {
  static bind(address: Address): Token {
    return new Token("Token", address);
  }

  allPartners(param0: BigInt): Token__allPartnersResult {
    let result = super.call(
      "allPartners",
      "allPartners(uint256):(uint256,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new Token__allPartnersResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
    );
  }

  try_allPartners(
    param0: BigInt,
  ): ethereum.CallResult<Token__allPartnersResult> {
    let result = super.tryCall(
      "allPartners",
      "allPartners(uint256):(uint256,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Token__allPartnersResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
      ),
    );
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowedPartners(param0: Address): boolean {
    let result = super.call(
      "allowedPartners",
      "allowedPartners(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_allowedPartners(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowedPartners",
      "allowedPartners(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  blockToMint(): BigInt {
    let result = super.call("blockToMint", "blockToMint():(uint256)", []);

    return result[0].toBigInt();
  }

  try_blockToMint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("blockToMint", "blockToMint():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  blockUnitForMint(): BigInt {
    let result = super.call(
      "blockUnitForMint",
      "blockUnitForMint():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_blockUnitForMint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "blockUnitForMint",
      "blockUnitForMint():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue),
      ],
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ecoFund(): Address {
    let result = super.call("ecoFund", "ecoFund():(address)", []);

    return result[0].toAddress();
  }

  try_ecoFund(): ethereum.CallResult<Address> {
    let result = super.tryCall("ecoFund", "ecoFund():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue),
      ],
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMintable(): boolean {
    let result = super.call("isMintable", "isMintable():(bool)", []);

    return result[0].toBoolean();
  }

  try_isMintable(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMintable", "isMintable():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minBlockWaitingWithdrawal(): BigInt {
    let result = super.call(
      "minBlockWaitingWithdrawal",
      "minBlockWaitingWithdrawal():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_minBlockWaitingWithdrawal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minBlockWaitingWithdrawal",
      "minBlockWaitingWithdrawal():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintToEcoFund(): BigInt {
    let result = super.call("mintToEcoFund", "mintToEcoFund():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintToEcoFund(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintToEcoFund",
      "mintToEcoFund():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintToPartner(): BigInt {
    let result = super.call("mintToPartner", "mintToPartner():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintToPartner(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintToPartner",
      "mintToPartner():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintToWemix(): BigInt {
    let result = super.call("mintToWemix", "mintToWemix():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintToWemix(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mintToWemix", "mintToWemix():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nextPartnerToMint(): BigInt {
    let result = super.call(
      "nextPartnerToMint",
      "nextPartnerToMint():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_nextPartnerToMint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextPartnerToMint",
      "nextPartnerToMint():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  partnerByIndex(_index: BigInt): Token__partnerByIndexResult {
    let result = super.call(
      "partnerByIndex",
      "partnerByIndex(uint256):(uint256,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_index)],
    );

    return new Token__partnerByIndexResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
    );
  }

  try_partnerByIndex(
    _index: BigInt,
  ): ethereum.CallResult<Token__partnerByIndexResult> {
    let result = super.tryCall(
      "partnerByIndex",
      "partnerByIndex(uint256):(uint256,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_index)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Token__partnerByIndexResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
      ),
    );
  }

  partnerBySerial(_serial: BigInt): Token__partnerBySerialResult {
    let result = super.call(
      "partnerBySerial",
      "partnerBySerial(uint256):(uint256,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_serial)],
    );

    return new Token__partnerBySerialResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
    );
  }

  try_partnerBySerial(
    _serial: BigInt,
  ): ethereum.CallResult<Token__partnerBySerialResult> {
    let result = super.tryCall(
      "partnerBySerial",
      "partnerBySerial(uint256):(uint256,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_serial)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Token__partnerBySerialResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
      ),
    );
  }

  partnersNumber(): BigInt {
    let result = super.call("partnersNumber", "partnersNumber():(uint256)", []);

    return result[0].toBigInt();
  }

  try_partnersNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "partnersNumber",
      "partnersNumber():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  unitStaking(): BigInt {
    let result = super.call("unitStaking", "unitStaking():(uint256)", []);

    return result[0].toBigInt();
  }

  try_unitStaking(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("unitStaking", "unitStaking():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wemix(): Address {
    let result = super.call("wemix", "wemix():(address)", []);

    return result[0].toAddress();
  }

  try_wemix(): ethereum.CallResult<Address> {
    let result = super.tryCall("wemix", "wemix():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ecoFund(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _wemix(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAllowedPartnerCall extends ethereum.Call {
  get inputs(): AddAllowedPartnerCall__Inputs {
    return new AddAllowedPartnerCall__Inputs(this);
  }

  get outputs(): AddAllowedPartnerCall__Outputs {
    return new AddAllowedPartnerCall__Outputs(this);
  }
}

export class AddAllowedPartnerCall__Inputs {
  _call: AddAllowedPartnerCall;

  constructor(call: AddAllowedPartnerCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAllowedPartnerCall__Outputs {
  _call: AddAllowedPartnerCall;

  constructor(call: AddAllowedPartnerCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Change_blockUnitForMintCall extends ethereum.Call {
  get inputs(): Change_blockUnitForMintCall__Inputs {
    return new Change_blockUnitForMintCall__Inputs(this);
  }

  get outputs(): Change_blockUnitForMintCall__Outputs {
    return new Change_blockUnitForMintCall__Outputs(this);
  }
}

export class Change_blockUnitForMintCall__Inputs {
  _call: Change_blockUnitForMintCall;

  constructor(call: Change_blockUnitForMintCall) {
    this._call = call;
  }

  get _block(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Change_blockUnitForMintCall__Outputs {
  _call: Change_blockUnitForMintCall;

  constructor(call: Change_blockUnitForMintCall) {
    this._call = call;
  }
}

export class Change_ecoFundCall extends ethereum.Call {
  get inputs(): Change_ecoFundCall__Inputs {
    return new Change_ecoFundCall__Inputs(this);
  }

  get outputs(): Change_ecoFundCall__Outputs {
    return new Change_ecoFundCall__Outputs(this);
  }
}

export class Change_ecoFundCall__Inputs {
  _call: Change_ecoFundCall;

  constructor(call: Change_ecoFundCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Change_ecoFundCall__Outputs {
  _call: Change_ecoFundCall;

  constructor(call: Change_ecoFundCall) {
    this._call = call;
  }
}

export class Change_minBlockWaitingWithdrawalCall extends ethereum.Call {
  get inputs(): Change_minBlockWaitingWithdrawalCall__Inputs {
    return new Change_minBlockWaitingWithdrawalCall__Inputs(this);
  }

  get outputs(): Change_minBlockWaitingWithdrawalCall__Outputs {
    return new Change_minBlockWaitingWithdrawalCall__Outputs(this);
  }
}

export class Change_minBlockWaitingWithdrawalCall__Inputs {
  _call: Change_minBlockWaitingWithdrawalCall;

  constructor(call: Change_minBlockWaitingWithdrawalCall) {
    this._call = call;
  }

  get _block(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Change_minBlockWaitingWithdrawalCall__Outputs {
  _call: Change_minBlockWaitingWithdrawalCall;

  constructor(call: Change_minBlockWaitingWithdrawalCall) {
    this._call = call;
  }
}

export class Change_mintToEcoFundCall extends ethereum.Call {
  get inputs(): Change_mintToEcoFundCall__Inputs {
    return new Change_mintToEcoFundCall__Inputs(this);
  }

  get outputs(): Change_mintToEcoFundCall__Outputs {
    return new Change_mintToEcoFundCall__Outputs(this);
  }
}

export class Change_mintToEcoFundCall__Inputs {
  _call: Change_mintToEcoFundCall;

  constructor(call: Change_mintToEcoFundCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Change_mintToEcoFundCall__Outputs {
  _call: Change_mintToEcoFundCall;

  constructor(call: Change_mintToEcoFundCall) {
    this._call = call;
  }
}

export class Change_mintToPartnerCall extends ethereum.Call {
  get inputs(): Change_mintToPartnerCall__Inputs {
    return new Change_mintToPartnerCall__Inputs(this);
  }

  get outputs(): Change_mintToPartnerCall__Outputs {
    return new Change_mintToPartnerCall__Outputs(this);
  }
}

export class Change_mintToPartnerCall__Inputs {
  _call: Change_mintToPartnerCall;

  constructor(call: Change_mintToPartnerCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Change_mintToPartnerCall__Outputs {
  _call: Change_mintToPartnerCall;

  constructor(call: Change_mintToPartnerCall) {
    this._call = call;
  }
}

export class Change_mintToWemixCall extends ethereum.Call {
  get inputs(): Change_mintToWemixCall__Inputs {
    return new Change_mintToWemixCall__Inputs(this);
  }

  get outputs(): Change_mintToWemixCall__Outputs {
    return new Change_mintToWemixCall__Outputs(this);
  }
}

export class Change_mintToWemixCall__Inputs {
  _call: Change_mintToWemixCall;

  constructor(call: Change_mintToWemixCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Change_mintToWemixCall__Outputs {
  _call: Change_mintToWemixCall;

  constructor(call: Change_mintToWemixCall) {
    this._call = call;
  }
}

export class Change_unitStakingCall extends ethereum.Call {
  get inputs(): Change_unitStakingCall__Inputs {
    return new Change_unitStakingCall__Inputs(this);
  }

  get outputs(): Change_unitStakingCall__Outputs {
    return new Change_unitStakingCall__Outputs(this);
  }
}

export class Change_unitStakingCall__Inputs {
  _call: Change_unitStakingCall;

  constructor(call: Change_unitStakingCall) {
    this._call = call;
  }

  get _unit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Change_unitStakingCall__Outputs {
  _call: Change_unitStakingCall;

  constructor(call: Change_unitStakingCall) {
    this._call = call;
  }
}

export class Change_wemixCall extends ethereum.Call {
  get inputs(): Change_wemixCall__Inputs {
    return new Change_wemixCall__Inputs(this);
  }

  get outputs(): Change_wemixCall__Outputs {
    return new Change_wemixCall__Outputs(this);
  }
}

export class Change_wemixCall__Inputs {
  _call: Change_wemixCall;

  constructor(call: Change_wemixCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Change_wemixCall__Outputs {
  _call: Change_wemixCall;

  constructor(call: Change_wemixCall) {
    this._call = call;
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RemoveAllowedPartnerCall extends ethereum.Call {
  get inputs(): RemoveAllowedPartnerCall__Inputs {
    return new RemoveAllowedPartnerCall__Inputs(this);
  }

  get outputs(): RemoveAllowedPartnerCall__Outputs {
    return new RemoveAllowedPartnerCall__Outputs(this);
  }
}

export class RemoveAllowedPartnerCall__Inputs {
  _call: RemoveAllowedPartnerCall;

  constructor(call: RemoveAllowedPartnerCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAllowedPartnerCall__Outputs {
  _call: RemoveAllowedPartnerCall;

  constructor(call: RemoveAllowedPartnerCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get _withdrawalWaitingMinBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class StakeDelegatedCall extends ethereum.Call {
  get inputs(): StakeDelegatedCall__Inputs {
    return new StakeDelegatedCall__Inputs(this);
  }

  get outputs(): StakeDelegatedCall__Outputs {
    return new StakeDelegatedCall__Outputs(this);
  }
}

export class StakeDelegatedCall__Inputs {
  _call: StakeDelegatedCall;

  constructor(call: StakeDelegatedCall) {
    this._call = call;
  }

  get _partner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _withdrawalWaitingMinBlock(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StakeDelegatedCall__Outputs {
  _call: StakeDelegatedCall;

  constructor(call: StakeDelegatedCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _serial(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
