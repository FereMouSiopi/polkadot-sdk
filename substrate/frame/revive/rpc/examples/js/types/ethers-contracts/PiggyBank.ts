/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
	BaseContract,
	BigNumberish,
	BytesLike,
	FunctionFragment,
	Result,
	Interface,
	ContractRunner,
	ContractMethod,
	Listener,
} from 'ethers'
import type {
	TypedContractEvent,
	TypedDeferredTopicFilter,
	TypedEventLog,
	TypedListener,
	TypedContractMethod,
} from './common'

export interface PiggyBankInterface extends Interface {
	getFunction(nameOrSignature: 'deposit' | 'getDeposit' | 'owner' | 'withdraw'): FunctionFragment

	encodeFunctionData(functionFragment: 'deposit', values?: undefined): string
	encodeFunctionData(functionFragment: 'getDeposit', values?: undefined): string
	encodeFunctionData(functionFragment: 'owner', values?: undefined): string
	encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish]): string

	decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'getDeposit', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result
}

export interface PiggyBank extends BaseContract {
	connect(runner?: ContractRunner | null): PiggyBank
	waitForDeployment(): Promise<this>

	interface: PiggyBankInterface

	queryFilter<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>
	queryFilter<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>

	on<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>
	on<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>

	once<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>
	once<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>

	listeners<TCEvent extends TypedContractEvent>(
		event: TCEvent
	): Promise<Array<TypedListener<TCEvent>>>
	listeners(eventName?: string): Promise<Array<Listener>>
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>

	deposit: TypedContractMethod<[], [bigint], 'payable'>

	getDeposit: TypedContractMethod<[], [bigint], 'view'>

	owner: TypedContractMethod<[], [string], 'view'>

	withdraw: TypedContractMethod<[withdrawAmount: BigNumberish], [bigint], 'nonpayable'>

	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T

	getFunction(nameOrSignature: 'deposit'): TypedContractMethod<[], [bigint], 'payable'>
	getFunction(nameOrSignature: 'getDeposit'): TypedContractMethod<[], [bigint], 'view'>
	getFunction(nameOrSignature: 'owner'): TypedContractMethod<[], [string], 'view'>
	getFunction(
		nameOrSignature: 'withdraw'
	): TypedContractMethod<[withdrawAmount: BigNumberish], [bigint], 'nonpayable'>

	filters: {}
}
