"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1393],{7132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),i=t(28453);const r={},c="Best Practices for Casper Smart Contract Authors",a={id:"developers/writing-onchain-code/best-practices",title:"Best Practices for Casper Smart Contract Authors",description:"At its core, the Casper platform is software, and best practices for general software development will apply. However, there are specific variables and situations that should be considered when developing for a Casper network. For example, a smart contract installed on global state cannot access file systems or open a connection to external resources.",source:"@site/docs/developers/writing-onchain-code/best-practices.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/best-practices",permalink:"/next/developers/writing-onchain-code/best-practices",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1723745091e3,frontMatter:{},sidebar:"developers",previous:{title:"Factory Contracts",permalink:"/next/developers/writing-onchain-code/factory-pattern"},next:{title:"Overview",permalink:"/next/developers/json-rpc/"}},o={},l=[{value:"Data Efficiency",id:"data-efficiency",level:2},{value:"Costs",id:"costs",level:2},{value:"Tips to reduce WASM size",id:"tips-to-reduce-wasm-size",level:3},{value:"Inlining",id:"inlining",level:2},{value:"Testing",id:"testing",level:2}];function d(e){const n={a:"a",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"best-practices-for-casper-smart-contract-authors",children:"Best Practices for Casper Smart Contract Authors"})}),"\n",(0,s.jsx)(n.p,{children:"At its core, the Casper platform is software, and best practices for general software development will apply. However, there are specific variables and situations that should be considered when developing for a Casper network. For example, a smart contract installed on global state cannot access file systems or open a connection to external resources."}),"\n",(0,s.jsx)(n.h2,{id:"data-efficiency",children:"Data Efficiency"}),"\n",(0,s.jsxs)(n.p,{children:["When developing on Casper, a policy of efficient data usage will ensure the lowest possible cost for on-chain computation. To this end, minimizing the number of necessary ",(0,s.jsx)(n.a,{href:"/next/developers/cli/sending-transactions",children:"transactions"})," will drastically decrease the overall cost."]}),"\n",(0,s.jsxs)(n.p,{children:["When creating smart contracts, including an explicit initialization entry point allows the contract to self-initialize without a subsequent transaction of session code. This entry point creates the internal structure of the contract and cannot be called after the initial transaction. Below is an example of a self-initalizing entry point that can be used within the ",(0,s.jsx)(n.code,{children:"call"})," function."]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:"Example Self-initialization Entry Point"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'\n// This entry point initializes the donation system, setting up the fundraising purse\n// and creating a dictionary to track the account hashes and the number of donations\n// made.\n#[no_mangle]\npub extern "C" fn init() {\n    let fundraising_purse = system::create_purse();\n    runtime::put_key(FUNDRAISING_PURSE, fundraising_purse.into());\n    // Create a dictionary to track the mapping of account hashes to number of donations made.\n    storage::new_dictionary(LEDGER).unwrap_or_revert();\n}\n\npub extern "C" fn call() {\n    let init_entry_point = EntryPoint::new(\n        ENTRY_POINT_INIT,\n        vec![],\n        CLType::Unit,\n        EntryPointAccess::Public,\n        EntryPointType::Contract,\n    );\n'})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Bear in mind, the host node will not enforce this. The smart contract author must create the entry point and ensure it cannot be called after initial transaction."}),"\n",(0,s.jsx)(n.h2,{id:"costs",children:"Costs"}),"\n",(0,s.jsxs)(n.p,{children:["Computations occurring on-chain come with associated ",(0,s.jsx)(n.a,{href:"/next/concepts/economics/gas-concepts",children:"gas costs"}),". Efficient coding can help to minimize gas costs, through the reduction of overall Wasm sent to global state. Beginning with 1.5.0, even invalid Wasm will incur gas costs when sent to global state. As such, proper testing prior to sending a transaction is critical."]}),"\n",(0,s.jsxs)(n.p,{children:["Further, there is a set cost of 2.5 CSPR to create a new purse. If possible, the ",(0,s.jsx)(n.a,{href:"/next/resources/tutorials/advanced/transfer-token-to-contract#scenario2",children:"reuse of purses"})," should be considered to reduce this cost. If reusing purses, proper access management must be maintained to prevent lapses in security. Ultimately, any choices made in regards to security and contract safeguards rely on the smart contract author."]}),"\n",(0,s.jsx)(n.h3,{id:"tips-to-reduce-wasm-size",children:"Tips to reduce WASM size"}),"\n",(0,s.jsxs)(n.p,{children:["Transactions have a maxim size specified in each network chainspec as ",(0,s.jsx)(n.code,{children:"max_transaction_size = 1_048_576"}),". For example, networks running node version 2.0, have the following maximum transaction size in bytes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"max_transaction_size = 1_048_576\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here are a few tips to reduce the size of Wasm included in a transaction:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Build the smart contract in release mode. You will find an example ",(0,s.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Makefile#L10",children:"here"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cargo build --release --target wasm32-unknown-unknown\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run\xa0",(0,s.jsx)(n.code,{children:"wasm-strip"}),"\xa0on the compiled code (see\xa0",(0,s.jsx)(n.a,{href:"https://github.com/WebAssembly/wabt",children:"WABT"}),"). You will find an example ",(0,s.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Makefile#L12",children:"here"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"wasm-strip target/wasm32-unknown-unknown/release/contract.wasm\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Don't enable the\xa0",(0,s.jsx)(n.code,{children:"std"}),"\xa0feature when linking to the\xa0",(0,s.jsx)(n.code,{children:"casper-contract"}),"\xa0or\xa0",(0,s.jsx)(n.code,{children:"casper-types"}),"\xa0crates using the ",(0,s.jsx)(n.code,{children:"#![no_std]"})," attribute, which tells the program not to import the standard libraries. You will find an example ",(0,s.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/cep18/src/main.rs#L1",children:"here"})," and further details ",(0,s.jsx)(n.a,{href:"https://docs.rust-embedded.org/book/intro/no-std.html",children:"here"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#![no_std]\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Build the contract with ",(0,s.jsx)(n.code,{children:"codegen-units"})," set to 1 by adding ",(0,s.jsx)(n.code,{children:"codegen-units = 1"}),"\xa0to the Cargo.toml under\xa0",(0,s.jsx)(n.code,{children:"[profile.release])"}),". You will find an example ",(0,s.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Cargo.toml#L14",children:"here"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Build the contract with link-time optimizations enabled by adding ",(0,s.jsx)(n.code,{children:"lto = true"}),"\xa0to the Cargo.toml under\xa0",(0,s.jsx)(n.code,{children:"[profile.release]"}),". You will find an example ",(0,s.jsx)(n.a,{href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Cargo.toml#L15",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"inlining",children:"Inlining"}),"\n",(0,s.jsxs)(n.p,{children:["As often as practicable, developers should inline functions by including the body of the function within their code rather than making ",(0,s.jsx)(n.code,{children:"call"})," or ",(0,s.jsx)(n.code,{children:"call_indirect"})," to the function. In the context of coding for Casper blockchain purposes, this reduces the overhead of executed Wasm and prevents unexpected errors due to exceeding resource tolerances."]}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["Testing all transactions prior to committing them to ",(0,s.jsx)(n.a,{href:"https://cspr.live/",children:"Mainnet"})," can assist authors in detecting bugs and inefficiencies prior to incurring gas fees. Casper provides several methods of testing, including unit testing, testing using NCTL and sending transactions to ",(0,s.jsx)(n.a,{href:"https://testnet.cspr.live/",children:"Testnet"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Information on these processes can be found at the following locations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/next/developers/writing-onchain-code/testing-session-code",children:"Unit Testing Session Code"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/next/developers/writing-onchain-code/testing-contracts",children:"Testing Smart Contracts"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/next/developers/dapps/nctl-test",children:"Testing Smart Contracts with NCTL"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, the following two tutorials outline sending an example contract using both NCTL and Testnet:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/counter/",children:"A Counter On An NCTL Network"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/counter-testnet",children:"A Counter On The Testnet"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);