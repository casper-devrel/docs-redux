"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[8645],{5898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(4848),r=s(8453);const i={title:"Quick Installation"},a="Casper NFT Quick Installation Guide",c={id:"resources/tokens/cep78/using-casper-client/quickstart-guide",title:"Quick Installation",description:"This quick installation guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-78 Casper Enhanced NFT contract to the Casper Testnet. For greater detail into the creation and mechanics of the Casper NFT contract, see the complete Casper NFT Tutorial.",source:"@site/docs/resources/tokens/cep78/using-casper-client/quickstart-guide.md",sourceDirName:"resources/tokens/cep78/using-casper-client",slug:"/resources/tokens/cep78/using-casper-client/quickstart-guide",permalink:"/resources/tokens/cep78/using-casper-client/quickstart-guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Quick Installation"},sidebar:"resources",previous:{title:"CEP-78 Modalities",permalink:"/resources/tokens/cep78/modalities"},next:{title:"Installation Workflow",permalink:"/resources/tokens/cep78/using-casper-client/full-installation-tutorial"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Installing the NFT Contract",id:"installing-the-nft-contract",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"casper-nft-quick-installation-guide",children:"Casper NFT Quick Installation Guide"}),"\n",(0,t.jsxs)(n.p,{children:["This quick installation guide introduces you to the Casper client commands and Wasm files necessary to deploy a CEP-78 Casper Enhanced NFT contract to the ",(0,t.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Casper Testnet"}),". For greater detail into the creation and mechanics of the Casper NFT contract, see the complete ",(0,t.jsx)(n.a,{href:"/resources/tokens/cep78/using-casper-client/full-installation-tutorial",children:"Casper NFT Tutorial"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To execute transactions on a Casper network involving NFTs, you will need some CSPR tokens to pay for the transactions. The Testnet provides test tokens using a ",(0,t.jsx)(n.a,{href:"/users/testnet-faucet",children:"faucet"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before using this guide, ensure you meet the following requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set up the ",(0,t.jsx)(n.a,{href:"/developers/prerequisites",children:"development prerequisites"}),", including the ",(0,t.jsx)(n.a,{href:"/developers/prerequisites#install-casper-client",children:"Casper client"})]}),"\n",(0,t.jsxs)(n.li,{children:["Get a valid ",(0,t.jsx)(n.a,{href:"/developers/prerequisites#acquire-node-address-from-network-peers",children:"node address"})," from the network"]}),"\n",(0,t.jsxs)(n.li,{children:["Know how to install a ",(0,t.jsx)(n.a,{href:"/developers/cli/sending-deploys",children:"smart contract"})," on a Casper network"]}),"\n",(0,t.jsx)(n.li,{children:"Hold enough CSPR tokens to pay for transactions"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["Clone the Casper NFT (CEP-78) ",(0,t.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/",children:"contract repository"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/casper-ecosystem/cep-78-enhanced-nft/ && cd cep-78-enhanced-nft\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Run the following commands to build the ",(0,t.jsx)(n.code,{children:"contract.wasm"})," in the ",(0,t.jsx)(n.code,{children:"contract/target/wasm32-unknown-unknown/release"})," directory and run the tests."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"make prepare\nmake test\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output of the command would end with the following message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"test result: ok. 159 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 15.33s\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-nft-contract",children:"Installing the NFT Contract"}),"\n",(0,t.jsx)(n.p,{children:"The following command will install a sample NFT contract on the Testnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'casper-client put-deploy --node-address http://localhost:11101/rpc/ \\\n--chain-name "casper-net-1" \\\n--payment-amount 5000000000 \\\n--secret-key ~/casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--session-path contract/target/wasm32-unknown-unknown/release/contract.wasm \\\n--session-arg "collection_name:string=\'CEP-78-collection\'" \\\n--session-arg "collection_symbol:string=\'CEP78\'" \\\n--session-arg "total_token_supply:u64=\'100\'" \\\n--session-arg "ownership_mode:u8=\'2\'" \\\n--session-arg "nft_kind:u8=\'1\'" \\\n--session-arg "nft_metadata_kind:u8=\'0\'" \\\n--session-arg "json_schema:string=\'nft-schema\'" \\\n--session-arg "identifier_mode:u8=\'0\'" \\\n--session-arg "metadata_mutability:u8=\'0\'"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(n.p,{children:"Learn to query the contract, perform token transfers, set up approvals, and understand the testing framework."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/resources/tokens/cep78/using-casper-client/querying-NFTs",children:"Query"})," the NTF Contract"]}),"\n",(0,t.jsxs)(n.li,{children:["Learn to ",(0,t.jsx)(n.a,{href:"/resources/tokens/cep78/using-casper-client/interacting-with-NFTs",children:"Mint, Transfer, and Burn"})," NFT tokens"]}),"\n",(0,t.jsxs)(n.li,{children:["Review the ",(0,t.jsx)(n.a,{href:"/resources/tokens/cep78/using-casper-client/testing-NFTs",children:"Tests"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);