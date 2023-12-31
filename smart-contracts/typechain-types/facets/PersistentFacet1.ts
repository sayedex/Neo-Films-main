/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface PersistentFacet1Interface extends utils.Interface {
  functions: {
    "loadM1()": FunctionFragment;
    "loadM2()": FunctionFragment;
    "setM1(string)": FunctionFragment;
    "setM2(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "loadM1" | "loadM2" | "setM1" | "setM2"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "loadM1", values?: undefined): string;
  encodeFunctionData(functionFragment: "loadM2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setM1",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setM2",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "loadM1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "loadM2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setM1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setM2", data: BytesLike): Result;

  events: {};
}

export interface PersistentFacet1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PersistentFacet1Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    loadM1(overrides?: CallOverrides): Promise<[string]>;

    loadM2(overrides?: CallOverrides): Promise<[string]>;

    setM1(
      msg_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setM2(
      msg_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  loadM1(overrides?: CallOverrides): Promise<string>;

  loadM2(overrides?: CallOverrides): Promise<string>;

  setM1(
    msg_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setM2(
    msg_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    loadM1(overrides?: CallOverrides): Promise<string>;

    loadM2(overrides?: CallOverrides): Promise<string>;

    setM1(
      msg_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setM2(
      msg_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    loadM1(overrides?: CallOverrides): Promise<BigNumber>;

    loadM2(overrides?: CallOverrides): Promise<BigNumber>;

    setM1(
      msg_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setM2(
      msg_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    loadM1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    loadM2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setM1(
      msg_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setM2(
      msg_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
