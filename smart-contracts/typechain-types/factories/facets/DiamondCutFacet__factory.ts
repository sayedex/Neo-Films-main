/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../../facets/DiamondCutFacet";

const _abi = [
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
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612499806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906115c0565b61004c565b005b610054610123565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146100c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100b8906116d8565b60405180910390fd5b61011c8585906100d19190611a01565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610156565b5050505050565b600061012d610385565b60050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60005b835181101561033a57600084828151811061017757610176611a16565b5b60200260200101516020015190506000600281111561019957610198611a45565b5b8160028111156101ac576101ab611a45565b5b036101fc576101f78583815181106101c7576101c6611a16565b5b6020026020010151600001518684815181106101e6576101e5611a16565b5b6020026020010151604001516103b2565b610326565b600160028111156102105761020f611a45565b5b81600281111561022357610222611a45565b5b036102735761026e85838151811061023e5761023d611a16565b5b60200260200101516000015186848151811061025d5761025c611a16565b5b602002602001015160400151610629565b610325565b60028081111561028657610285611a45565b5b81600281111561029957610298611a45565b5b036102e9576102e48583815181106102b4576102b3611a16565b5b6020026020010151600001518684815181106102d3576102d2611a16565b5b6020026020010151604001516108aa565b610324565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031b90611ae6565b60405180910390fd5b5b5b50808061033290611b3f565b915050610159565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161036e93929190611e3c565b60405180910390a16103808282610a35565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116103f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ed90611ef3565b60405180910390fd5b6000610400610385565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610471576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046890611f85565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036104de576104dd8285610b57565b5b60005b83518110156106225760008482815181106104ff576104fe611a16565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ea90612017565b60405180910390fd5b6105ff8583868a610c32565b838061060a9061204f565b9450505050808061061a90611b3f565b9150506104e1565b5050505050565b600081511161066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066490611ef3565b60405180910390fd5b6000610677610385565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106df90611f85565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1603610755576107548285610b57565b5b60005b83518110156108a357600084828151811061077657610775611a16565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610869576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610860906120f5565b60405180910390fd5b610874858284610ddf565b6108808583868a610c32565b838061088b9061204f565b9450505050808061089b90611b3f565b915050610758565b5050505050565b60008151116108ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e590611ef3565b60405180910390fd5b60006108f8610385565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610969576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096090612187565b60405180910390fd5b60005b8251811015610a2f57600083828151811061098a57610989611a16565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a1a848284610ddf565b50508080610a2790611b3f565b91505061096c565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160315610b5357610a8c8260405180606001604052806028815260200161241860289139611441565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610ab491906121e3565b600060405180830381855af49150503d8060008114610aef576040519150601f19603f3d011682016040523d82523d6000602084013e610af4565b606091505b509150915081610b5057600081511115610b115780518082602001fd5b83836040517f192105d7000000000000000000000000000000000000000000000000000000008152600401610b479291906121fa565b60405180910390fd5b50505b5050565b610b798160405180606001604052806024815260200161244060249139611441565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e459061229c565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ebc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb39061232e565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180549050610f93919061234e565b90508082146111275760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018281548110610ff457610ff3611a16565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000184815481106110705761106f611a16565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061117b5761117a612382565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff021916905550506000810361143a57600060018660020180549050611265919061234e565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146113a65760008760020183815481106112cf576112ce611a16565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508088600201838154811061131357611312611a16565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806113ba576113b9612382565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b905060008111829061148d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148491906123f5565b60405180910390fd5b50505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126114cc576114cb6114a7565b5b8235905067ffffffffffffffff8111156114e9576114e86114ac565b5b602083019150836020820283011115611505576115046114b1565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115378261150c565b9050919050565b6115478161152c565b811461155257600080fd5b50565b6000813590506115648161153e565b92915050565b60008083601f8401126115805761157f6114a7565b5b8235905067ffffffffffffffff81111561159d5761159c6114ac565b5b6020830191508360018202830111156115b9576115b86114b1565b5b9250929050565b6000806000806000606086880312156115dc576115db61149d565b5b600086013567ffffffffffffffff8111156115fa576115f96114a2565b5b611606888289016114b6565b9550955050602061161988828901611555565b935050604086013567ffffffffffffffff81111561163a576116396114a2565b5b6116468882890161156a565b92509250509295509295909350565b600082825260208201905092915050565b7f4469616d6f6e6443757446616365743a204f6e6c79206465762063616e20637560008201527f74206469616d6f6e640000000000000000000000000000000000000000000000602082015250565b60006116c2602983611655565b91506116cd82611666565b604082019050919050565b600060208201905081810360008301526116f1816116b5565b9050919050565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611741826116f8565b810181811067ffffffffffffffff821117156117605761175f611709565b5b80604052505050565b6000611773611493565b905061177f8282611738565b919050565b600067ffffffffffffffff82111561179f5761179e611709565b5b602082029050602081019050919050565b600080fd5b600080fd5b600381106117c757600080fd5b50565b6000813590506117d9816117ba565b92915050565b600067ffffffffffffffff8211156117fa576117f9611709565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118408161180b565b811461184b57600080fd5b50565b60008135905061185d81611837565b92915050565b6000611876611871846117df565b611769565b90508083825260208201905060208402830185811115611899576118986114b1565b5b835b818110156118c257806118ae888261184e565b84526020840193505060208101905061189b565b5050509392505050565b600082601f8301126118e1576118e06114a7565b5b81356118f1848260208601611863565b91505092915050565b6000606082840312156119105761190f6117b0565b5b61191a6060611769565b9050600061192a84828501611555565b600083015250602061193e848285016117ca565b602083015250604082013567ffffffffffffffff811115611962576119616117b5565b5b61196e848285016118cc565b60408301525092915050565b600061198d61198884611784565b611769565b905080838252602082019050602084028301858111156119b0576119af6114b1565b5b835b818110156119f757803567ffffffffffffffff8111156119d5576119d46114a7565b5b8086016119e289826118fa565b855260208501945050506020810190506119b2565b5050509392505050565b6000611a0e36848461197a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000611ad0602783611655565b9150611adb82611a74565b604082019050919050565b60006020820190508181036000830152611aff81611ac3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000611b4a82611b35565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b7c57611b7b611b06565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611bbc8161152c565b82525050565b60038110611bd357611bd2611a45565b5b50565b6000819050611be482611bc2565b919050565b6000611bf482611bd6565b9050919050565b611c0481611be9565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611c3f8161180b565b82525050565b6000611c518383611c36565b60208301905092915050565b6000602082019050919050565b6000611c7582611c0a565b611c7f8185611c15565b9350611c8a83611c26565b8060005b83811015611cbb578151611ca28882611c45565b9750611cad83611c5d565b925050600181019050611c8e565b5085935050505092915050565b6000606083016000830151611ce06000860182611bb3565b506020830151611cf36020860182611bfb565b5060408301518482036040860152611d0b8282611c6a565b9150508091505092915050565b6000611d248383611cc8565b905092915050565b6000602082019050919050565b6000611d4482611b87565b611d4e8185611b92565b935083602082028501611d6085611ba3565b8060005b85811015611d9c5784840389528151611d7d8582611d18565b9450611d8883611d2c565b925060208a01995050600181019050611d64565b50829750879550505050505092915050565b611db78161152c565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611df7578082015181840152602081019050611ddc565b60008484015250505050565b6000611e0e82611dbd565b611e188185611dc8565b9350611e28818560208601611dd9565b611e31816116f8565b840191505092915050565b60006060820190508181036000830152611e568186611d39565b9050611e656020830185611dae565b8181036040830152611e778184611e03565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611edd602b83611655565b9150611ee882611e81565b604082019050919050565b60006020820190508181036000830152611f0c81611ed0565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000611f6f602c83611655565b9150611f7a82611f13565b604082019050919050565b60006020820190508181036000830152611f9e81611f62565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b6000612001603583611655565b915061200c82611fa5565b604082019050919050565b6000602082019050818103600083015261203081611ff4565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061205a82612037565b91506bffffffffffffffffffffffff820361207857612077611b06565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006120df603883611655565b91506120ea82612083565b604082019050919050565b6000602082019050818103600083015261210e816120d2565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000612171603683611655565b915061217c82612115565b604082019050919050565b600060208201905081810360008301526121a081612164565b9050919050565b600081905092915050565b60006121bd82611dbd565b6121c781856121a7565b93506121d7818560208601611dd9565b80840191505092915050565b60006121ef82846121b2565b915081905092915050565b600060408201905061220f6000830185611dae565b81810360208301526122218184611e03565b90509392505050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b6000612286603783611655565b91506122918261222a565b604082019050919050565b600060208201905081810360008301526122b581612279565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b6000612318602e83611655565b9150612323826122bc565b604082019050919050565b600060208201905081810360008301526123478161230b565b9050919050565b600061235982611b35565b915061236483611b35565b925082820390508181111561237c5761237b611b06565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081519050919050565b60006123c7826123b1565b6123d18185611655565b93506123e1818560208601611dd9565b6123ea816116f8565b840191505092915050565b6000602082019050818103600083015261240f81846123bc565b90509291505056fe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a26469706673582212209216f257c39f5bbbf21ff12c534348629b928bd3c73e6cec2b83e595adfb945364736f6c63430008130033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  override connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}