"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[9356],{69833:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var t=a(74848),c=a(28453);const d={title:"Installing Contracts"},s="Installing Smart Contracts",i={id:"developers/cli/installing-contracts",title:"Installing Contracts",description:"This document details the process of installing Casper smart contracts using the Casper command-line client and the put-deploy command.",source:"@site/docs/developers/cli/installing-contracts.md",sourceDirName:"developers/cli",slug:"/developers/cli/installing-contracts",permalink:"/docs-redux/next/developers/cli/installing-contracts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1725898285e3,frontMatter:{title:"Installing Contracts"},sidebar:"developers",previous:{title:"Sending Transactions",permalink:"/docs-redux/next/developers/cli/sending-transactions"},next:{title:"Verifying Contracts",permalink:"/docs-redux/next/developers/cli/verifying-contracts"}},r={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing a Contract in Global State",id:"installing-contract-code",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installing-smart-contracts",children:"Installing Smart Contracts"})}),"\n",(0,t.jsxs)(n.p,{children:["This document details the process of installing ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/writing-onchain-code/simple-contract",children:"Casper smart contracts"})," using the ",(0,t.jsx)(n.a,{href:"../prerequisites.md#install-casper-client",children:"Casper command-line client"})," and the ",(0,t.jsx)(n.code,{children:"put-deploy"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You have a compiled contract Wasm to send to a Casper network."}),"\n",(0,t.jsxs)(n.li,{children:["You have installed the ",(0,t.jsx)(n.a,{href:"../prerequisites.md#install-casper-client",children:"Casper CLI client"})," to interact with the network."]}),"\n",(0,t.jsxs)(n.li,{children:["You have a ",(0,t.jsx)(n.a,{href:"../prerequisites.md#setting-up-an-account",children:"Casper Account"})," with a public and secret key pair to initiate the transaction."]}),"\n",(0,t.jsxs)(n.li,{children:["You have enough CSPR tokens in your account's main purse to pay for transactions. If you plan to use the Casper Testnet, learn about the ",(0,t.jsx)(n.a,{href:"/docs-redux/next/users/testnet-faucet",children:"faucet"})," to fund your testing account's main purse."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installing-contract-code",children:"Installing a Contract in Global State"}),"\n",(0,t.jsxs)(n.p,{children:["To install a contract in ",(0,t.jsx)(n.a,{href:"/docs-redux/next/concepts/glossary/G#global-state",children:"global state"}),", you need to send a transaction to the network with the contract Wasm. You can do so by using the ",(0,t.jsx)(n.code,{children:"put-transaction session"})," command, or the equivalent ",(0,t.jsx)(n.code,{children:"put-txn session"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client put-transaction session \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--chain-name [CHAIN_NAME] \\\n--secret-key [KEY_PATH]/secret_key.pem \\\n--gas-price-tolerance [MAX_GAS_AMOUNT] \\\n--pricing-mode fixed \\\n--transaction-path <PATH> \\\n--session-entry-point call \\\n--category 'install-upgrade'\n"})}),"\n",(0,t.jsx)(n.p,{children:"The arguments used above are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chain-name"})," - The network where you wish to send the transaction. For Mainnet, use ",(0,t.jsx)(n.em,{children:"casper"}),". For Testnet, use ",(0,t.jsx)(n.em,{children:"casper-test"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"})," - The file name containing the secret key of the account paying for the transaction"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gas-price-tolerance"})," - The maximum amount of gas a user is willing to pay for execution"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pricing-mode"}),' - Set to "fixed" for Mainnet and Testnet']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transaction-path"})," - The path to the contract Wasm, which should point to wherever you compiled the contract (",(0,t.jsx)(n.code,{children:".wasm"})," file) on your computer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"session-entry-point"})," - Name of the entrypoint that will be used when installing the contract, which is usually ",(0,t.jsx)(n.code,{children:"call"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"category"})," - The transaction type, based on Wasm size, with ",(0,t.jsx)(n.code,{children:"install-upgrade"})," being the largest"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once you call this command, it will return a transaction hash. You can use this hash to ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/cli/sending-transactions#sending-the-transaction",children:"verify"})," successful execution of the transaction."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The pricing mode varies based on each network ",(0,t.jsx)(n.a,{href:"/docs-redux/next/concepts/glossary/C#chainspec",children:"chainspec"}),'. For Mainnet and Testnet, the pricing mode is "fixed", meaning that costs are fixed per the cost table, and senders do not specify how much they pay.']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example - Contract Installation"})}),"\n",(0,t.jsxs)(n.p,{children:["Here we send a ",(0,t.jsx)(n.code,{children:"counter-installer.wasm"})," to a local NCTL network:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client put-transaction session \\\n--node-address http://localhost:11101 \\\n--chain-name casper-net-1 \\\n--secret-key ~/casper/casper-nctl/assets/net-1/users/user-1/secret_key.pem \\\n--gas-price-tolerance 10 \\\n--pricing-mode fixed \\\n--transaction-path ~/test_contracts/counter_installer.wasm \\\n--session-entry-point call \\\n--category 'install-upgrade'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The result of the query includes a ",(0,t.jsx)(n.code,{children:"transaction_hash"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 90342686534145684,\n  "result": {\n    "api_version": "2.0.0",\n    "transaction_hash": {\n      "Version1": "49c36616a50962fa5a7dd7901677ae44667fa9f8c542e49eb2284ba2c900bba2"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To verify the transaction, call ",(0,t.jsx)(n.code,{children:"get-transaction"})," and provide the transaction hash you received from ",(0,t.jsx)(n.code,{children:"put-transaction"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"casper-client get-transaction --node-address http://localhost:11101 [TRANSACTION_HASH]\n"})}),"\n",(0,t.jsxs)(n.details,{children:["\n",(0,t.jsx)(n.summary,{children:"Expand to view the sample response details"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 5297043714444661948,\n  "result": {\n    "api_version": "2.0.0",\n    "transaction": {\n      "Version1": {\n        "hash": "49c36616a50962fa5a7dd7901677ae44667fa9f8c542e49eb2284ba2c900bba2",\n        "header": {\n          "chain_name": "casper-net-1",\n          "timestamp": "2024-08-21T11:21:36.201Z",\n          "ttl": "30m",\n          "body_hash": "543df05d05c456e9b6b5d657029e9ad20c674c6e6b56f498af0052ec87ee9f80",\n          "pricing_mode": {\n            "Fixed": {\n              "gas_price_tolerance": 10\n            }\n          },\n          "initiator_addr": {\n            "PublicKey": "0149d133f697b5867d312e18ae0b129ef0c63499df2815fe339dca727963edb80d"\n          }\n        },\n        "body": {\n          "args": [],\n          "target": {\n            "Session": {\n              "module_bytes": "[105936 hex chars]",\n              "runtime": "VmCasperV1"\n            }\n          },\n          "entry_point": "Call",\n          "transaction_category": 2,\n          "scheduling": "Standard"\n        },\n        "approvals": [\n          {\n            "signer": "0149d133f697b5867d312e18ae0b129ef0c63499df2815fe339dca727963edb80d",\n            "signature": "01537684dd531ce6a4c9383ba7ea565e9408ed2c5dd8bb12787f131e1148fd0f057f45dbaa7bbc0230743cc5740c67db64f66bab1df57547722899f7d7289c1f0c"\n          }\n        ]\n      }\n    },\n    "execution_info": {\n      "block_hash": "24ead40278a71966e16823150b06c06675a216dbef761c1d6ad1439da4147f4a",\n      "block_height": 8463,\n      "execution_result": {\n        "Version2": {\n          "initiator": {\n            "PublicKey": "0149d133f697b5867d312e18ae0b129ef0c63499df2815fe339dca727963edb80d"\n          },\n          "error_message": null,\n          "limit": "1000000000000",\n          "consumed": "46747144601",\n          "cost": "1000000000000",\n          "payment": [],\n          "transfers": [],\n          "size_estimate": 53215,\n          "effects": [\n            {\n              "key": "balance-hold-0121dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000",\n              "kind": {\n                "Write": {\n                  "CLValue": {\n                    "cl_type": "U512",\n                    "bytes": "050010a5d4e8",\n                    "parsed": "1000000000000"\n                  }\n                }\n              }\n            },\n            {\n              "key": "uref-65f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab03631407-000",\n              "kind": {\n                "Write": {\n                  "CLValue": {\n                    "cl_type": "I32",\n                    "bytes": "00000000",\n                    "parsed": 0\n                  }\n                }\n              }\n            },\n            {\n              "key": "uref-29feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a-000",\n              "kind": {\n                "Write": {\n                  "CLValue": {\n                    "cl_type": "Unit",\n                    "bytes": "",\n                    "parsed": null\n                  }\n                }\n              }\n            },\n            {\n              "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",\n              "kind": {\n                "Write": {\n                  "Package": {\n                    "versions": [],\n                    "disabled_versions": [],\n                    "groups": [],\n                    "lock_status": "Unlocked"\n                  }\n                }\n              }\n            },\n            {\n              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-05c3e063406ddde43671e0d47c45e31a10e9204137171f96ce818bdc725a4e1b",\n              "kind": {\n                "Write": {\n                  "NamedKey": {\n                    "named_key": {\n                      "cl_type": "Key",\n                      "bytes": "1050d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",\n                      "parsed": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94"\n                    },\n                    "name": {\n                      "cl_type": "String",\n                      "bytes": "14000000636f756e7465725f7061636b6167655f6e616d65",\n                      "parsed": "counter_package_name"\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-6409273bf327d5a6a39a29dbd07c5cd2f48ee4f227fd443d025adc51e1bd5103",\n              "kind": {\n                "Write": {\n                  "NamedKey": {\n                    "named_key": {\n                      "cl_type": "Key",\n                      "bytes": "0229feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a07",\n                      "parsed": "uref-29feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a-007"\n                    },\n                    "name": {\n                      "cl_type": "String",\n                      "bytes": "13000000636f756e7465725f6163636573735f75726566",\n                      "parsed": "counter_access_uref"\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",\n              "kind": "Identity"\n            },\n            {\n              "key": "entity-system-1f15cf43df68e8b382415a8ef687521f61f1ecce6960b72eaa13f43bfc448139",\n              "kind": "Identity"\n            },\n            {\n              "key": "package-f1c97c9b6228be3f316753e4e1289d910071fb880dddccce18881abfb9f53526",\n              "kind": "Identity"\n            },\n            {\n              "key": "entry-point-v1-entity-system-1f15cf43df68e8b382415a8ef687521f61f1ecce6960b72eaa13f43bfc448139-21bddc7e4379ba445c7118cb51962954e0d1e5aa5cacc0c4ff6095b57eb9fb33",\n              "kind": "Identity"\n            },\n            {\n              "key": "uref-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef-000",\n              "kind": {\n                "Write": {\n                  "CLValue": {\n                    "cl_type": "Unit",\n                    "bytes": "",\n                    "parsed": null\n                  }\n                }\n              }\n            },\n            {\n              "key": "balance-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef",\n              "kind": {\n                "Write": {\n                  "CLValue": {\n                    "cl_type": "U512",\n                    "bytes": "00",\n                    "parsed": "0"\n                  }\n                }\n              }\n            },\n            {\n              "key": "byte-code-v1-wasm-0577a7c92fd20e1af76aa9e257631cb240e8187191bba2025e88663d0288e936",\n              "kind": {\n                "Write": {\n                  "ByteCode": {\n                    "kind": "V1CasperWasm",\n                    "bytes": "[82290 hex chars]"\n                  }\n                }\n              }\n            },\n            {\n              "key": "named-key-entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68-5fed34ec1b2c38445b984eee743ce17fb1e5e89a8cb910cc2f9f12b005360eef",\n              "kind": {\n                "Write": {\n                  "NamedKey": {\n                    "named_key": {\n                      "cl_type": "Key",\n                      "bytes": "0265f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab0363140707",\n                      "parsed": "uref-65f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab03631407-007"\n                    },\n                    "name": {\n                      "cl_type": "String",\n                      "bytes": "05000000636f756e74",\n                      "parsed": "count"\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "key": "entry-point-v1-entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68-399a84b0da15b34ecd774b1c4ad47c72a9e1298df057d83bee93d22ac4972aa5",\n              "kind": {\n                "Write": {\n                  "EntryPoint": {\n                    "V1CasperVm": {\n                      "name": "counter_get",\n                      "args": [],\n                      "ret": "I32",\n                      "access": "Public",\n                      "entry_point_type": "Called",\n                      "entry_point_payment": "Caller"\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "key": "entry-point-v1-entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68-3eba75fc27f0ec2786e09c09d72d61e4c28a86d44d8efc9911460d5438396481",\n              "kind": {\n                "Write": {\n                  "EntryPoint": {\n                    "V1CasperVm": {\n                      "name": "counter_inc",\n                      "args": [],\n                      "ret": "Unit",\n                      "access": "Public",\n                      "entry_point_type": "Called",\n                      "entry_point_payment": "Caller"\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "key": "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68",\n              "kind": {\n                "Write": {\n                  "AddressableEntity": {\n                    "protocol_version": "2.0.0",\n                    "entity_kind": {\n                      "SmartContract": "VmCasperV1"\n                    },\n                    "package_hash": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",\n                    "byte_code_hash": "byte-code-0577a7c92fd20e1af76aa9e257631cb240e8187191bba2025e88663d0288e936",\n                    "main_purse": "uref-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef-007",\n                    "associated_keys": [\n                      {\n                        "account_hash": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",\n                        "weight": 1\n                      }\n                    ],\n                    "action_thresholds": {\n                      "deployment": 1,\n                      "upgrade_management": 1,\n                      "key_management": 1\n                    },\n                    "message_topics": []\n                  }\n                }\n              }\n            },\n            {\n              "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",\n              "kind": {\n                "Write": {\n                  "Package": {\n                    "versions": [\n                      {\n                        "entity_version_key": {\n                          "protocol_version_major": 2,\n                          "entity_version": 1\n                        },\n                        "addressable_entity_hash": "addressable-entity-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"\n                      }\n                    ],\n                    "disabled_versions": [],\n                    "groups": [],\n                    "lock_status": "Unlocked"\n                  }\n                }\n              }\n            },\n            {\n              "key": "uref-7bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf-000",\n              "kind": {\n                "Write": {\n                  "CLValue": {\n                    "cl_type": "U32",\n                    "bytes": "01000000",\n                    "parsed": 1\n                  }\n                }\n              }\n            },\n            {\n              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-174ccaaa723ba74cee869017501fab28512b6ef9296d48a38daff7d0da13d1a1",\n              "kind": {\n                "Write": {\n                  "NamedKey": {\n                    "named_key": {\n                      "cl_type": "Key",\n                      "bytes": "027bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf07",\n                      "parsed": "uref-7bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf-007"\n                    },\n                    "name": {\n                      "cl_type": "String",\n                      "bytes": "0700000076657273696f6e",\n                      "parsed": "version"\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-83b1cde13136393741a1e906a892ccdd289e7827cc9ef84a98cc96e86464bde0",\n              "kind": {\n                "Write": {\n                  "NamedKey": {\n                    "named_key": {\n                      "cl_type": "Key",\n                      "bytes": "1102a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68",\n                      "parsed": "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"\n                    },\n                    "name": {\n                      "cl_type": "String",\n                      "bytes": "07000000636f756e746572",\n                      "parsed": "counter"\n                    }\n                  }\n                }\n              }\n            },\n            {\n              "key": "balance-hold-0121dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000",\n              "kind": {\n                "Prune": "balance-hold-0121dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000"\n              }\n            },\n            {\n              "key": "balance-hold-0021dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000",\n              "kind": {\n                "Write": {\n                  "CLValue": {\n                    "cl_type": "U512",\n                    "bytes": "050010a5d4e8",\n                    "parsed": "1000000000000"\n                  }\n                }\n              }\n            },\n            {\n              "key": "entity-system-b76adcf84d4900edec0af9001e727bcc3d4920a40afaa6a0e43137bacf62b91e",\n              "kind": "Identity"\n            },\n            {\n              "key": "entity-system-1f15cf43df68e8b382415a8ef687521f61f1ecce6960b72eaa13f43bfc448139",\n              "kind": "Identity"\n            },\n            {\n              "key": "entity-system-1d29f1bd6ba7016f430498de2d0fe7c9d2c14c200d79be33e0ad240bc2a0d229",\n              "kind": "Identity"\n            },\n            {\n              "key": "bid-addr-01f47c77764d4d4c0030c563266724e78e07b2b4719ecfceeae816470c5ecf882d",\n              "kind": "Identity"\n            },\n            {\n              "key": "bid-addr-04f47c77764d4d4c0030c563266724e78e07b2b4719ecfceeae816470c5ecf882d0903000000000000",\n              "kind": {\n                "Write": {\n                  "BidKind": {\n                    "Credit": {\n                      "validator_public_key": "01e4bb993269e0fe33d6e575ab6a642fdcaf692449a1529c4f73e636dfff9d3e61",\n                      "era_id": 777,\n                      "amount": "1000000000000"\n                    }\n                  }\n                }\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note the contract entity address in the above sample output. You will need this to ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/cli/querying-global-state#query-the-contract",children:"query the contract"})," installed. In this example, the address is ",(0,t.jsx)(n.code,{children:"entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Next, ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/cli/querying-global-state",children:"query global state"})," to see more details about the successfully installed contract."]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Learn to ",(0,t.jsx)(n.a,{href:"/docs-redux/next/developers/cli/querying-global-state",children:"query global state"})," using the Casper command-line client."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(96540);const c={},d=t.createContext(c);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);