"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[8455],{40260:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var c=s(74848),t=s(28453);const i={title:"Accounts and Keys"},a="Accounts and Cryptographic Keys",r={id:"concepts/accounts-and-keys",title:"Accounts and Keys",description:"The Casper blockchain uses an on-chain account-based model, uniquely identified by an AccountHash derived from a specific PublicKey. The AccountHash is a 32-byte hash derived from any of the supported PublicKey variants below to standardize keys that can vary in length.",source:"@site/docs/concepts/accounts-and-keys.md",sourceDirName:"concepts",slug:"/concepts/accounts-and-keys",permalink:"/docs-redux/next/concepts/accounts-and-keys",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Accounts and Keys"},sidebar:"concepts",previous:{title:"Addressable Entities",permalink:"/docs-redux/next/concepts/addressable-entity"},next:{title:"Key Types",permalink:"/docs-redux/next/concepts/key-types"}},o={},d=[{value:"Creating Accounts and Keys",id:"creating-accounts-and-keys",level:2},{value:"Option 1: Generating keys using the Casper Client",id:"option-1-key-generation-using-the-casper-client",level:3},{value:"EdDSA Keys",id:"eddsa-keys",level:4},{value:"ECDSA Keys",id:"ecdsa-keys",level:4},{value:"Option 2: Generating keys using a block explorer",id:"option-2-key-generation-using-a-block-explorer",level:3},{value:"Funding your Account",id:"funding-your-account",level:2},{value:"Working with Existing Ethereum Keys",id:"working-with-existing-ethereum-keys",level:2},{value:"Option 3: Generating keys using OpenSSL",id:"option-3-generating-keys-using-openssl",level:3},{value:"Generating the <code>secret_key.pem</code> file",id:"generating-the-secret_keypem-file",level:4},{value:"Generating public keys from the <code>secret_key.pem</code> file",id:"generating-public-keys-from-the-secret_keypem-file",level:4},{value:"Generating an Account Hash",id:"generating-an-account-hash",level:2},{value:"Finding the Main Purse URef",id:"purse-uref",level:2},{value:"Using the Casper CLI client",id:"using-the-casper-cli-client",level:3},{value:"Using a block explorer",id:"using-a-block-explorer",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"accounts-and-cryptographic-keys",children:"Accounts and Cryptographic Keys"})}),"\n",(0,c.jsxs)(n.p,{children:["The Casper blockchain uses an on-chain ",(0,c.jsx)(n.a,{href:"/docs-redux/next/concepts/design/casper-design#accounts-head",children:"account-based model"}),", uniquely identified by an ",(0,c.jsx)(n.code,{children:"AccountHash"})," derived from a specific ",(0,c.jsx)(n.code,{children:"PublicKey"}),". The ",(0,c.jsx)(n.code,{children:"AccountHash"})," is a 32-byte hash derived from any of the supported ",(0,c.jsx)(n.code,{children:"PublicKey"})," variants below to standardize keys that can vary in length."]}),"\n",(0,c.jsxs)(n.p,{children:["By default, a transactional interaction with the blockchain takes the form of a ",(0,c.jsx)(n.code,{children:"Transaction"})," cryptographically signed by the key-pair corresponding to the ",(0,c.jsx)(n.code,{children:"PublicKey"})," used to create the account."]}),"\n",(0,c.jsx)(n.p,{children:"The Casper platform supports two types of keys for creating accounts and signing transactions:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"#eddsa-keys",children:"Ed25519"})," keys, which use the Edwards-curve Digital Signature Algorithm (EdDSA) and are 66 bytes long"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"#ecdsa-keys",children:"Secp256k1"})," keys, which use the  Elliptic Curve Digital Signature Algorithm (ECDSA) with the P-256 curve; they are 68 bytes long and are also found on the Ethereum blockchain"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["You can generate keys using both formats, and it is also possible to ",(0,c.jsx)(n.a,{href:"#working-with-existing-ethereum-keys",children:"work with existing Ethereum keys"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["You can also ",(0,c.jsx)(n.a,{href:"#generating-an-account-hash",children:"generate an account hash"})," from a public key with the Casper command-line client."]}),"\n",(0,c.jsx)(n.h2,{id:"creating-accounts-and-keys",children:"Creating Accounts and Keys"}),"\n",(0,c.jsxs)(n.p,{children:["When you create an account on the Casper blockchain, a cryptographic key-pair will be created when using either the ",(0,c.jsx)(n.a,{href:"#option-1-key-generation-using-the-casper-client",children:"Casper command-line client"})," or a block explorer."]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:"SAVE your keys to a safe place, preferably offline."})}),"\n",(0,c.jsx)(n.h3,{id:"option-1-key-generation-using-the-casper-client",children:"Option 1: Generating keys using the Casper Client"}),"\n",(0,c.jsx)(n.p,{children:"This option describes how you can use the Casper command-line client to set up an account using either key type."}),"\n",(0,c.jsx)(n.h4,{id:"eddsa-keys",children:"EdDSA Keys"}),"\n",(0,c.jsx)(n.p,{children:"The command-line client generates EdDSA keys by default. Use the command below to create the account."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"mkdir ed25519-keys\ncasper-client keygen ed25519-keys/\ntree ed25519-keys/\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Sample output of the ",(0,c.jsx)(n.code,{children:"tree"})," command shows the contents of the ",(0,c.jsx)(n.em,{children:"ed25519-keys"})," folder:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"ed25519-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n\n0 directories, 3 files\n"})}),"\n",(0,c.jsx)(n.p,{children:"Here are some details about the files generated:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"public_key.pem"})," is a ",(0,c.jsx)(n.em,{children:"PEM"}),"-encoded public key"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"public_key_hex"})," is a hexadecimal-encoded string of the public key"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"secret_key.pem"})," is the ",(0,c.jsx)(n.em,{children:"PEM"}),"-encoded secret key"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The public-key-hex for ",(0,c.jsx)(n.code,{children:"Ed25519"})," keys starts with 01 and is 66 bytes long:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"cat ed25519-keys/public_key_hex\n011724c5c8e2404ca01c872e1bbd9202a0114e5d143760f685086a5cffe261dabd\n"})}),"\n",(0,c.jsx)(n.h4,{id:"ecdsa-keys",children:"ECDSA Keys"}),"\n",(0,c.jsxs)(n.p,{children:["To create ",(0,c.jsx)(n.code,{children:"Secp256k1"})," keys, which use the ECDSA algorithm with the P-256 curve, follow these steps:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"mkdir secp256k1-keys\ncasper-client keygen -a secp256k1 secp256k1-keys/\ntree secp256k1-keys/\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Sample output of the ",(0,c.jsx)(n.code,{children:"tree"})," command shows the contents of the ",(0,c.jsx)(n.em,{children:"secp256k1-keys"})," folder:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"secp256k1-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n\n0 directories, 3 files\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The public-key-hex for ",(0,c.jsx)(n.code,{children:"Secp256k1"})," keys starts with 02 and is 68 bytes long:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"cat secp256k1-keys/public_key_hex\n020287e1a79d0d9f3196391808a8b3e5007895f43cde679e4c960e7e9b92841bb98d\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:"After generating keys for the account, you may add funds to the account's purse to finish the account creation process."})}),"\n",(0,c.jsx)(n.h3,{id:"option-2-key-generation-using-a-block-explorer",children:"Option 2: Generating keys using a block explorer"}),"\n",(0,c.jsx)(n.p,{children:"This option is available on networks that have a block explorer."}),"\n",(0,c.jsxs)(n.p,{children:["For instance, on the official Testnet, the ",(0,c.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"CSPR.live"})," block explorer is available, and the following instructions assume you are using it."]}),"\n",(0,c.jsxs)(n.p,{children:["Start by creating an account using the ",(0,c.jsx)(n.a,{href:"https://www.casperwallet.io/",children:"Casper Wallet"}),", ",(0,c.jsx)(n.a,{href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?support=true",children:"Ledger"}),", or ",(0,c.jsx)(n.a,{href:"https://casper.tor.us/",children:"Torus Wallet"}),"."]}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsxs)(n.p,{children:["The Casper Signer has been replaced with the Casper Wallet and will be deprecated. We recommend migrating all your Casper accounts to the Casper Wallet as outlined ",(0,c.jsx)(n.a,{href:"https://www.casperwallet.io/user-guide/signer-user-start-here",children:"here"}),"."]})}),"\n",(0,c.jsx)(n.h2,{id:"funding-your-account",children:"Funding your Account"}),"\n",(0,c.jsxs)(n.p,{children:["Once you create your account, you can ",(0,c.jsx)(n.a,{href:"../developers/prerequisites.md#fund-your-account",children:"fund the account's main purse"})," to finish the process of setting it up."]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:"Until you fund your account's main purse, it does not exist on the blockchain."})}),"\n",(0,c.jsx)(n.h2,{id:"working-with-existing-ethereum-keys",children:"Working with Existing Ethereum Keys"}),"\n",(0,c.jsx)(n.p,{children:"You can also use existing Ethereum keys in Casper. Here is an example set of Ethereum keys and their corresponding address:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Address:0x7863B6F7232D99FF80B74E4C8BB3BEE3BDE0291F\nPublic key:0470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66\nPrivate key:29773906aef3ee1f5868371fd7c50f9092205df26f60e660cafacbf2b95fe086\n"})}),"\n",(0,c.jsxs)(n.p,{children:["To use existing Ethereum keys, the Casper virtual machine (VM) needs to know that the key is a ",(0,c.jsx)(n.code,{children:"Secp256k1"})," type. To achieve this, we will prefix the public key hex with 02, as shown in the example below."]}),"\n",(0,c.jsx)(n.p,{children:"The Casper command-line client provides an example of how this works."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"The following transaction sends 10 CSPR."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client transfer \\\n--transfer-id 1234567 \\\n--node-address http://localhost:7777 \\\n--chain-name casper \\\n--target-account 020470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66 \\\n--amount 10000000000 \\\n--secret-key <path-to-secret_key.pem> \\\n--payment-amount 100000000\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:["The payment amount varies based on each transaction and network ",(0,c.jsx)(n.a,{href:"/docs-redux/next/concepts/glossary/C#chainspec",children:"chainspec"}),"."]})}),"\n",(0,c.jsxs)(n.p,{children:["The Casper command-line client requires the secret key in ",(0,c.jsx)(n.em,{children:"PEM"})," format to send a transaction from this account. If you want to use existing Ethereum keys with the command-line client, a conversion to ",(0,c.jsx)(n.em,{children:"PEM"})," format is needed."]}),"\n",(0,c.jsxs)(n.p,{children:["The following example is a JS script that generates a ",(0,c.jsx)(n.em,{children:"PEM"})," file, using a ",(0,c.jsx)(n.a,{href:"https://github.com/stacks-network/key-encoder-js",children:"key encoder"})," and Node.js. To install these components, do the following:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo apt install nodejs\nnpm install key-encoder\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Then create the JS script ",(0,c.jsx)(n.em,{children:"convert-to-pem.js"})," using ",(0,c.jsx)(n.em,{children:"vi"})," or ",(0,c.jsx)(n.em,{children:"nano"}),", and include this content:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'var KeyEncoder = require(\'key-encoder\'),\nkeyEncoder = new KeyEncoder.default(\'secp256k1\');\nlet priv_hex = "THE SECRET KEY TO ENCODE";\nlet priv_pem = keyEncoder.encodePrivate(priv_hex, "raw", "pem");\nconsole.log(priv_pem);\n'})}),"\n",(0,c.jsx)(n.p,{children:"Then run the script using Node.js and name the secret key."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"node convert-to-pem.js > eth-secret.pem\n"})}),"\n",(0,c.jsxs)(n.p,{children:["To view the secret key, use ",(0,c.jsx)(n.code,{children:"cat <filename>"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"cat eth-secret.pem\n"})}),"\n",(0,c.jsx)(n.p,{children:"Below is the sample output showing the contents of the secret key."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIBjXY+7xZagzTjL4p8bGWS8FPRcW13mgytdu5c3e556MoAcGBSuBBAAK\noUQDQgAEpV4dVaPeAEaH0VXrQtLzjpGt1pui1q08311em6wDCchGNjzsnOY7stGF\ntlKF2V5RFQn4rzkwipSYnrqaPf1pTA==\n-----END EC PRIVATE KEY-----\n"})}),"\n",(0,c.jsx)(n.h3,{id:"option-3-generating-keys-using-openssl",children:"Option 3: Generating keys using OpenSSL"}),"\n",(0,c.jsxs)(n.p,{children:["You can generate keys without the Casper client using the ",(0,c.jsx)(n.a,{href:"https://www.openssl.org/",children:"openssl"})," cryptography toolkit. The commands below are valid only for generating Ed25519 keys on a Linux operating system."]}),"\n",(0,c.jsxs)(n.h4,{id:"generating-the-secret_keypem-file",children:["Generating the ",(0,c.jsx)(n.code,{children:"secret_key.pem"})," file"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"openssl genpkey -algorithm ed25519 -out secret_key.pem\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"generating-public-keys-from-the-secret_keypem-file",children:["Generating public keys from the ",(0,c.jsx)(n.code,{children:"secret_key.pem"})," file"]}),"\n",(0,c.jsxs)(n.p,{children:["For default Ed25519 keys, you can generate the ",(0,c.jsx)(n.code,{children:"public_key.pem"})," and ",(0,c.jsx)(n.code,{children:"public_key_hex"})," using these commands:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'openssl pkey -in secret_key.pem -pubout -out public_key.pem\n\n{ echo -n 01; openssl pkey -outform DER -pubout -in "secret_key.pem" | tail -c +13 | openssl base64 | openssl base64 -d | hexdump -ve \'/1 "%02x" \' | tr -d "/n"; } > public_key_hex\n'})}),"\n",(0,c.jsx)(n.h2,{id:"generating-an-account-hash",children:"Generating an Account Hash"}),"\n",(0,c.jsxs)(n.p,{children:["To generate the account hash for a public key, use the ",(0,c.jsx)(n.em,{children:"account-address"})," option of the Casper client. The argument for the ",(0,c.jsx)(n.em,{children:"public-key"})," must be a properly formatted public key. The public key may also be read from a file, which should be one of the two files generated via the ",(0,c.jsx)(n.em,{children:"keygen"})," command: ",(0,c.jsx)(n.em,{children:"public_key_hex"})," or ",(0,c.jsx)(n.em,{children:"public_key.pem"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client account-address --public-key <FORMATTED STRING or PATH>\n"})}),"\n",(0,c.jsx)(n.h2,{id:"purse-uref",children:"Finding the Main Purse URef"}),"\n",(0,c.jsx)(n.p,{children:"You can use the Casper CLI client or a block explorer to find the URef identifying an account's main purse."}),"\n",(0,c.jsx)(n.h3,{id:"using-the-casper-cli-client",children:"Using the Casper CLI client"}),"\n",(0,c.jsxs)(n.p,{children:["With the ",(0,c.jsx)(n.code,{children:"casper-client"}),", use the ",(0,c.jsx)(n.code,{children:"get-account-info"})," subcommand."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client get-account-info \\\n--node-address <HOST:PORT>  \\\n--public-key <FORMATTED STRING or PATH>\n"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"node-address"})," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"public-key"})," - This must be a properly formatted public key. The public key may instead be read in from a file, in which case, enter the path to the file as the argument. The file should be one of the two public key files generated via the ",(0,c.jsx)(n.code,{children:"keygen"}),' subcommand; "public_key_hex" or "public_key.pem"']}),"\n"]}),"\n",(0,c.jsxs)(n.details,{children:["\n",(0,c.jsx)(n.summary,{children:"Sample command and output"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'casper-client get-account-info --node-address http://65.21.75.254:7777  --public-key 0202ceafc0aa35f5a7bdda22f65c046b9b30b858459e18d3670f035839ad887fe5db\n{\n  "id": -2018234245556346849,\n  "jsonrpc": "2.0",\n  "result": {\n    "account": {\n      "account_hash": "account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34",\n      "action_thresholds": {\n        "deployment": 1,\n        "key_management": 1\n      },\n      "associated_keys": [\n        {\n          "account_hash": "account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34",\n          "weight": 1\n        }\n      ],\n      "main_purse": "uref-974019c976b5f26412ce486158d2431967af35d91387dae8cbcd43c20fce6452-007",\n      "named_keys": []\n    },\n    "api_version": "1.4.15",\n    "merkle_proof": "[29712 hex chars]"\n  }\n}\n\n'})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Run the following help command for more details:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"casper-client get-account-info --help\n"})}),"\n",(0,c.jsx)(n.h3,{id:"using-a-block-explorer",children:"Using a block explorer"}),"\n",(0,c.jsxs)(n.p,{children:["Using the block explorer for ",(0,c.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet"})," or ",(0,c.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet"}),", open the Account in question, and expand the ",(0,c.jsx)(n.code,{children:"Raw Data"})," section. Look for the ",(0,c.jsx)(n.code,{children:"main_purse"})," field and find the corresponding URef. If you do not see data in the ",(0,c.jsx)(n.code,{children:"Raw Data"})," section, then the account has not been funded yet."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Main purse",src:s(34995).A+"",width:"1576",height:"1494"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},34995:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/main_purse_uref-96cffa61cd6ab63f2fb996efe8fc4197.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var c=s(96540);const t={},i=c.createContext(t);function a(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);