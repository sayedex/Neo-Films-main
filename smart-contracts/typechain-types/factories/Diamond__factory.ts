/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Diamond, DiamondInterface } from "../Diamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_diamondCutFacet",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516200259f3803806200259f8339818101604052810190620000299190620017cc565b6200003a82620001ed60201b60201c565b6000600167ffffffffffffffff8111156200005a576200005962001813565b5b6040519080825280602002602001820160405280156200009757816020015b6200008362001716565b815260200190600190039081620000795790505b5090506000600167ffffffffffffffff811115620000ba57620000b962001813565b5b604051908082528060200260200182016040528015620000e95781602001602082028036833780820191505090505b509050631f931c1c60e01b816000815181106200010b576200010a62001842565b5b60200260200101907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152505060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020016000600281111562000195576200019462001871565b5b81526020018281525082600081518110620001b557620001b462001842565b5b6020026020010181905250620001e382600060405180602001604052806000815250620002cc60201b60201c565b5050505062002329565b6000620001ff6200055060201b60201c565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b8351811015620004fb576000848281518110620002f157620002f062001842565b5b60200260200101516020015190506000600281111562000316576200031562001871565b5b8160028111156200032c576200032b62001871565b5b036200038c57620003868583815181106200034c576200034b62001842565b5b6020026020010151600001518684815181106200036e576200036d62001842565b5b6020026020010151604001516200057d60201b60201c565b620004e4565b60016002811115620003a357620003a262001871565b5b816002811115620003b957620003b862001871565b5b03620004195762000413858381518110620003d957620003d862001842565b5b602002602001015160000151868481518110620003fb57620003fa62001842565b5b6020026020010151604001516200081f60201b60201c565b620004e3565b6002808111156200042f576200042e62001871565b5b81600281111562000445576200044462001871565b5b03620004a5576200049f85838151811062000465576200046462001842565b5b60200260200101516000015186848151811062000487576200048662001842565b5b60200260200101516040015162000ad360201b60201c565b620004e2565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004d99062001927565b60405180910390fd5b5b5b508080620004f29062001982565b915050620002cf565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673838383604051620005319392919062001cfc565b60405180910390a16200054b828262000c7b60201b60201c565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000815111620005c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005bb9062001dbd565b60405180910390fd5b6000620005d66200055060201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036200064a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006419062001e55565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1603620006c057620006bf828562000daf60201b60201c565b5b60005b835181101562000818576000848281518110620006e557620006e462001842565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620007dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007d39062001eed565b60405180910390fd5b620007f08583868a62000e9360201b60201c565b8380620007fd9062001f27565b945050505080806200080f9062001982565b915050620006c3565b5050505050565b600081511162000866576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200085d9062001dbd565b60405180910390fd5b6000620008786200055060201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620008ec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008e39062001e55565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1603620009625762000961828562000daf60201b60201c565b5b60005b835181101562000acc57600084828151811062000987576200098662001842565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000a7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000a749062001fd6565b60405180910390fd5b62000a908582846200104060201b60201c565b62000aa48583868a62000e9360201b60201c565b838062000ab19062001f27565b9450505050808062000ac39062001982565b91505062000965565b5050505050565b600081511162000b1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b119062001dbd565b60405180910390fd5b600062000b2c6200055060201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161462000ba0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b97906200206e565b60405180910390fd5b60005b825181101562000c7557600083828151811062000bc55762000bc462001842565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905062000c5d8482846200104060201b60201c565b5050808062000c6c9062001982565b91505062000ba3565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16031562000dab5762000cdc826040518060600160405280602881526020016200255360289139620016c160201b60201c565b6000808373ffffffffffffffffffffffffffffffffffffffff168360405162000d069190620020d2565b600060405180830381855af49150503d806000811462000d43576040519150601f19603f3d011682016040523d82523d6000602084013e62000d48565b606091505b50915091508162000da85760008151111562000d675780518082602001fd5b83836040517f192105d700000000000000000000000000000000000000000000000000000000815260040162000d9f929190620020eb565b60405180910390fd5b50505b5050565b62000dda816040518060600160405280602481526020016200257b60249139620016c160201b60201c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620010b2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620010a99062002195565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362001123576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200111a906200222d565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180549050620011fc91906200224f565b9050808214620013975760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001828154811062001261576200126062001842565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110620012e057620012df62001842565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480620013ee57620013ed6200228a565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008103620016ba57600060018660020180549050620014db91906200224f565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146200162357600087600201838154811062001549576200154862001842565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508088600201838154811062001590576200158f62001842565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806200163a57620016396200228a565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b905060008111829062001710576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001707919062002305565b60405180910390fd5b50505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600281111562001755576200175462001871565b5b8152602001606081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620017948262001767565b9050919050565b620017a68162001787565b8114620017b257600080fd5b50565b600081519050620017c6816200179b565b92915050565b60008060408385031215620017e657620017e562001762565b5b6000620017f685828601620017b5565b92505060206200180985828601620017b5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006200190f602783620018a0565b91506200191c82620018b1565b604082019050919050565b60006020820190508181036000830152620019428162001900565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006200198f8262001978565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620019c457620019c362001949565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b62001a068162001787565b82525050565b6003811062001a205762001a1f62001871565b5b50565b600081905062001a338262001a0c565b919050565b600062001a458262001a23565b9050919050565b62001a578162001a38565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b62001ac08162001a89565b82525050565b600062001ad4838362001ab5565b60208301905092915050565b6000602082019050919050565b600062001afa8262001a5d565b62001b06818562001a68565b935062001b138362001a79565b8060005b8381101562001b4a57815162001b2e888262001ac6565b975062001b3b8362001ae0565b92505060018101905062001b17565b5085935050505092915050565b600060608301600083015162001b716000860182620019fb565b50602083015162001b86602086018262001a4c565b506040830151848203604086015262001ba0828262001aed565b9150508091505092915050565b600062001bbb838362001b57565b905092915050565b6000602082019050919050565b600062001bdd82620019cf565b62001be98185620019da565b93508360208202850162001bfd85620019eb565b8060005b8581101562001c3f578484038952815162001c1d858262001bad565b945062001c2a8362001bc3565b925060208a0199505060018101905062001c01565b50829750879550505050505092915050565b62001c5c8162001787565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101562001c9e57808201518184015260208101905062001c81565b60008484015250505050565b6000601f19601f8301169050919050565b600062001cc88262001c62565b62001cd4818562001c6d565b935062001ce681856020860162001c7e565b62001cf18162001caa565b840191505092915050565b6000606082019050818103600083015262001d18818662001bd0565b905062001d29602083018562001c51565b818103604083015262001d3d818462001cbb565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b600062001da5602b83620018a0565b915062001db28262001d47565b604082019050919050565b6000602082019050818103600083015262001dd88162001d96565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b600062001e3d602c83620018a0565b915062001e4a8262001ddf565b604082019050919050565b6000602082019050818103600083015262001e708162001e2e565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b600062001ed5603583620018a0565b915062001ee28262001e77565b604082019050919050565b6000602082019050818103600083015262001f088162001ec6565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600062001f348262001f0f565b91506bffffffffffffffffffffffff820362001f555762001f5462001949565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b600062001fbe603883620018a0565b915062001fcb8262001f60565b604082019050919050565b6000602082019050818103600083015262001ff18162001faf565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b600062002056603683620018a0565b9150620020638262001ff8565b604082019050919050565b60006020820190508181036000830152620020898162002047565b9050919050565b600081905092915050565b6000620020a88262001c62565b620020b4818562002090565b9350620020c681856020860162001c7e565b80840191505092915050565b6000620020e082846200209b565b915081905092915050565b600060408201905062002102600083018562001c51565b818103602083015262002116818462001cbb565b90509392505050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b60006200217d603783620018a0565b91506200218a826200211f565b604082019050919050565b60006020820190508181036000830152620021b0816200216e565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b600062002215602e83620018a0565b91506200222282620021b7565b604082019050919050565b60006020820190508181036000830152620022488162002206565b9050919050565b60006200225c8262001978565b9150620022698362001978565b925082820390508181111562002284576200228362001949565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b6000620022d182620022b9565b620022dd8185620018a0565b9350620022ef81856020860162001c7e565b620022fa8162001caa565b840191505092915050565b60006020820190508181036000830152620023218184620022c4565b905092915050565b61021a80620023396000396000f3fe60806040523661000b57005b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9050809150600082600001600080357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610141576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610138906101c4565b60405180910390fd5b3660008037600080366000845af43d6000803e8060008114610162573d6000f35b3d6000fd5b600082825260208201905092915050565b7f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f74206578697374600082015250565b60006101ae602083610167565b91506101b982610178565b602082019050919050565b600060208201905081810360008301526101dd816101a1565b905091905056fea2646970667358221220deadb73605a112e8b1bd4a462bdf22e2f9e0e3a92cfd185d828f2ec5a50e8ec264736f6c634300081300334c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465";

type DiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Diamond__factory extends ContractFactory {
  constructor(...args: DiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _contractOwner: PromiseOrValue<string>,
    _diamondCutFacet: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Diamond> {
    return super.deploy(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    ) as Promise<Diamond>;
  }
  override getDeployTransaction(
    _contractOwner: PromiseOrValue<string>,
    _diamondCutFacet: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _contractOwner,
      _diamondCutFacet,
      overrides || {}
    );
  }
  override attach(address: string): Diamond {
    return super.attach(address) as Diamond;
  }
  override connect(signer: Signer): Diamond__factory {
    return super.connect(signer) as Diamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondInterface {
    return new utils.Interface(_abi) as DiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Diamond {
    return new Contract(address, _abi, signerOrProvider) as Diamond;
  }
}