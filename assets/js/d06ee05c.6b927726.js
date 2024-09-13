"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1451],{48340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=n(74848),r=n(28453);const s={title:"Token Transfers",slug:"/resources/tutorials/advanced/transfer-token-to-contract"},o="Safely Transfer Tokens to a Contract",i={id:"resources/advanced/transfer-token-to-contract",title:"Token Transfers",description:"This tutorial covers two methods to handle tokens via a contract. This is not a native process to a Casper network and will require the use of custom code. The following two scenarios provide a framework for developers and the pros and cons of each example. Developers should choose the option that best suits their individual needs.",source:"@site/docs/resources/advanced/transfer-token-to-contract.md",sourceDirName:"resources/advanced",slug:"/resources/tutorials/advanced/transfer-token-to-contract",permalink:"/docs-redux/next/resources/tutorials/advanced/transfer-token-to-contract",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"sczembor",lastUpdatedAt:1724329928e3,frontMatter:{title:"Token Transfers",slug:"/resources/tutorials/advanced/transfer-token-to-contract"},sidebar:"tutorials",previous:{title:"Authorization Keys",permalink:"/docs-redux/next/resources/advanced/list-auth-keys-tutorial"},next:{title:"Storage Workflow",permalink:"/docs-redux/next/resources/tutorials/advanced/storage-workflow"}},c={},h=[{value:"Scenario 1 - Creating a Throw-Away Purse",id:"scenario1",level:2},{value:"Scenario 1 - Advanced Variation",id:"scenario1-advanced",level:3},{value:"Scenario 2 - Maintaining a Reusable Purse within Contract Logic",id:"scenario2",level:2},{value:"Scenario 2 - Advanced Variation",id:"scenario2-advanced",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"safely-transfer-tokens-to-a-contract",children:"Safely Transfer Tokens to a Contract"})}),"\n",(0,a.jsx)(t.p,{children:"This tutorial covers two methods to handle tokens via a contract. This is not a native process to a Casper network and will require the use of custom code. The following two scenarios provide a framework for developers and the pros and cons of each example. Developers should choose the option that best suits their individual needs."}),"\n",(0,a.jsxs)(t.p,{children:["For increased security, token transfers from a main purse must be handled via session code (WASM), as shown ",(0,a.jsx)(t.a,{href:"/docs-redux/next/developers/writing-onchain-code/writing-session-code#transfers-using-session-code",children:"here"}),". Therefore, ",(0,a.jsx)(t.code,{children:"transfer-*"})," methods are unavailable in stored WASM for tokens originating from an account's main purse, even when the stored WASM runs in the account context."]}),"\n",(0,a.jsx)(t.h2,{id:"scenario1",children:"Scenario 1 - Creating a Throw-Away Purse"}),"\n",(0,a.jsx)(t.p,{children:"The first scenario involves the use of a single-use, throw-away purse. The caller creates and funds a purse independent of their main purse, before passing the URef to the callee."}),"\n",(0,a.jsx)(t.p,{children:"In this example, the smart contract retains full access to the purse, creating security concerns over its reuse by the caller. Further, it is also possible for the caller to retain full access to the disposable purse, although not demonstrated in the example. The contract should remove any tokens from the purse and transfer them to another purse under their control to avoid issues."}),"\n",(0,a.jsx)(t.p,{children:"This scenario is less complex, but more wasteful than the second scenario. Any purses created in this fashion remain permanent, but unused after the initial operation."}),"\n",(0,a.jsx)(t.p,{children:"Please note that the creation of a purse costs 2.5 CSPR on the Casper Mainnet."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[no_mangle]\npub extern "C" fn call() {\n    let amount: U512 = runtime::get_named_arg("amount");\n    // This is demonstrating the most direct case, wherein you pass in the contract_hash and\n    // the entry_point_name of the target contract as args.\n    // With prior setup having been done, this can also be simplified.\n    let contract_hash = runtime::get_named_arg("contract_hash");\n    let entry_point_name = runtime::get_named_arg("entry_point_name");\n\n    // This creates a new empty purse that the caller will use just this one time.\n    let new_purse = system::create_purse();\n    \n    // Transfer from the caller\'s main purse to the new purse that was just created.\n    // Note that transfer is done safely by the host logic.\n    system::transfer_from_purse_to_purse(account::get_main_purse(), new_purse, amount, None)\n        .unwrap_or_revert();\n        \n    // Pass the newly created purse to the smart contract with full access rights;    \n    // the called contract should receive the new purse, extract the token from it, and then do\n    // whatever else it is meant to do if a valid amount was transferred to it. Note that the\n    // caller\'s main purse is never exposed to the called contract; the newly created purse\n    // is provided instead.\n    runtime::call_contract(contract_hash, entry_point_name, runtime_args! {\n        // The arg names are defined by the contract that you are calling,\n        // there is no canonical name. The contract you are calling may have other\n        // runtime args that it requires.\n        "????" => new_purse\n    });\n}\n\n'})}),"\n",(0,a.jsx)(t.h3,{id:"scenario1-advanced",children:"Scenario 1 - Advanced Variation"}),"\n",(0,a.jsx)(t.p,{children:"Advanced versions of this scenario can mitigate the wastefulness inherent in the example. If the caller creates a named purse independent of their main purse, they can integrate it with the contract in question. In this way, the same purse can be used to fund a contract repeatedly."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/release-1.4.4/smart_contracts/contracts/client/named-purse-payment/src/main.rs",children:"This example"})," provides a framework for the idea, but will require modification to suit developer needs."]}),"\n",(0,a.jsx)(t.h2,{id:"scenario2",children:"Scenario 2 - Maintaining a Reusable Purse within Contract Logic"}),"\n",(0,a.jsx)(t.p,{children:"The second scenario involves more complex internal logic to allow for a purse's reuse. The contract itself keeps track of a purse associated with the caller as internal bookkeeping."}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.a,{href:"#scenario1",children:"Scenario 1"}),", the newly created purse is a pure means of transferring tokens from the caller to the callee. In contrast, Scenario 2 maintains an internal purse associated with the caller's address. This purse serves as token storage for actions the caller wishes the contract to undertake on their behalf. It differs from ",(0,a.jsx)(t.a,{href:"#scenario1-advanced",children:"Scenario 1's Advanced Variation"})," in that the purse in question is under the control of the contract rather than the caller."]}),"\n",(0,a.jsx)(t.p,{children:"Scenario 2 offers a less wasteful means of transferring tokens to a contract but comes with the added burden of internal complexity. When choosing between the two scenarios, you must evaluate the scope and needs of your project and choose accordingly."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'// Scenario 2: with this style, the contract being called has some internal accounting\n// to keep track of a reusable purse associated to the calling account; this avoids\n// wasteful creation of one time purses but requires the smart contract being called\n// to have more sophisticated internal logic. \n#[no_mangle]\npub extern "C" fn call() {\n    let amount: U512 = runtime::get_named_arg("amount");\n\n    // This is demonstrating the most direct case, wherein you pass in the contract_hash and\n    // the entry_point_names of the target contract as args.\n    // With prior setup having been done, this can also be simplified.\n    let contract_hash = runtime::get_named_arg("contract_hash");\n    // the name of the entry point on the contract that returns a purse uref to receive token at\n    // the actual name of the entry point is up to the smart contract authors\n    let deposit_point_name = runtime::get_named_arg("deposit_point_name");\n    // whatever entry point on the smart contract does the actual work if token has been transferred\n    // the actual name of which is up to the smart contract authors.\n    let other_entry_point_name = runtime::get_named_arg("other_entry_point_name");\n\n    // The smart contract returns a purse URef of a deposit purse (with ADD access rights only)\n    // for the caller to transfer to.\n    let deposit_purse: URef  = runtime::call_contract(contract_hash, deposit_point_name, runtime_args! {});\n\n    // transfer from the caller\'s purse to the purse provided by the contract; the transfer is handled\n    // safely by the host and the caller\'s purse is never exposed to the called smart contract.\n    system::transfer_from_purse_to_purse(account::get_main_purse(), deposit_purse, amount, None)\n        .unwrap_or_revert();\n\n    // The contract being interacted with looks up the associated purse, checks its balance, etc.\n    // within its logic. That side of it is entirely up to the smart contract authors to code; the caller\n    // merely calls the logic. Also, the entry point might require one or more runtime arguments. \n    // In all cases some discovery of the API of the contract you are calling is necessary.\n    runtime::call_contract(contract_hash, other_entry_point_name, runtime_args! {});\n}\n\n'})}),"\n",(0,a.jsx)(t.h3,{id:"scenario2-advanced",children:"Scenario 2 - Advanced Variation"}),"\n",(0,a.jsx)(t.p,{children:"In Scenario 2, the contract in question maintains a purse for each associated caller. The advanced variation establishes an internal ledger that records the balance of each caller. The contract can record the information for each caller as a dictionary item and respond accordingly. In this fashion, a single purse can store the motes of all callers accessing the contract."}),"\n",(0,a.jsx)(t.p,{children:"This design streamlines the internal accounting process of the contract but does require a greater degree of complexity during the initial setup."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);