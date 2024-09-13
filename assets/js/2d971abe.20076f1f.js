"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[5768],{35040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const r={title:"Local Network Testing"},o="Testing Smart Contracts with NCTL",a={id:"developers/dapps/nctl-test",title:"Local Network Testing",description:"NCTL effectively simulates a live Casper network. The process for sending a Transaction to an NCTL-based network is therefore similar to doing so on a live network.",source:"@site/docs/developers/dapps/nctl-test.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/nctl-test",permalink:"/docs-redux/next/developers/dapps/nctl-test",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724754971e3,frontMatter:{title:"Local Network Testing"},sidebar:"developers",previous:{title:"Local Network Setup",permalink:"/docs-redux/next/developers/dapps/setup-nctl"},next:{title:"Monitoring Events with the Casper Sidecar",permalink:"/docs-redux/next/developers/dapps/monitor-and-consume-events"}},c={},d=[{value:"Getting Started with NCTL",id:"getting-started-with-nctl",level:2},{value:"NCTL Verification Prior to Testing",id:"nctl-verification-prior-to-testing",level:2},{value:"Installing the Smart Contract",id:"installing-the-smart-contract",level:2},{value:"Verifying Transaction Execution",id:"verifying-transaction-execution",level:2},{value:"Interacting with the Installed Contract",id:"interacting-with-the-installed-contract",level:2},{value:"Verifying Correct Contract Behavior",id:"verifying-correct-contract-behavior",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"testing-smart-contracts-with-nctl",children:"Testing Smart Contracts with NCTL"})}),"\n",(0,s.jsxs)(n.p,{children:["NCTL effectively simulates a live Casper network. The process for sending a ",(0,s.jsx)(n.code,{children:"Transaction"})," to an NCTL-based network is therefore similar to doing so on a live network."]}),"\n",(0,s.jsxs)(n.p,{children:["Testing ",(0,s.jsx)(n.code,{children:"Transactions"})," prior to sending them to a Casper network ensures that they operate as intended. When working in an environment that requires payment for execution, errors and inefficiencies quickly add up. To this end, Casper provides several layers of testing to identify and rectify any errors. After ",(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/writing-onchain-code/simple-contract",children:"writing your smart contract"})," and testing it ",(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/writing-onchain-code/testing-contracts",children:"using the provided framework"}),", NCTL serves as the next step in the process. While testing is entirely optional, it should be considered a best practice to avoid paying for the execution of faulty code."]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started-with-nctl",children:"Getting Started with NCTL"}),"\n",(0,s.jsxs)(n.p,{children:["Prior to testing a ",(0,s.jsx)(n.code,{children:"Transaction"})," through NCTL, you should have the following steps accomplished:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/writing-onchain-code/simple-contract",children:"Completed writing a Transaction"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/writing-onchain-code/testing-contracts",children:"Tested the Transaction"})," using the Casper testing framework"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/dapps/setup-nctl",children:"Setup NCTL"})," on your system"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nctl-verification-prior-to-testing",children:"NCTL Verification Prior to Testing"}),"\n",(0,s.jsx)(n.p,{children:"Prior to attempting an NCTL test, you must verify that your local NCTL instance started correctly. Run the following command to view your current node status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nctl-status\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should see five nodes and instances of sidecar ",(0,s.jsx)(n.code,{children:"RUNNING"})," and five ",(0,s.jsx)(n.code,{children:"STOPPED"}),". Further, verify that the node and user information propagated within the ",(0,s.jsx)(n.em,{children:"casper-node/utils/assets"})," directory. Each node and user should have the associated ",(0,s.jsx)(n.code,{children:"Keys"})," necessary to interact with the network. Run the following command to view first user details:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nctl-view-user-account user=1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-the-smart-contract",children:"Installing the Smart Contract"}),"\n",(0,s.jsxs)(n.p,{children:["This document assumes that you setup your NCTL network using the standard settings in a directory called ",(0,s.jsx)(n.em,{children:"/casper/"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You will need the following information to use the ",(0,s.jsx)(n.code,{children:"put-transaction session"})," command:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"chain name"}),", in this case ",(0,s.jsx)(n.code,{children:"casper-net-1"}),". This will appear in our example put-transaction as ",(0,s.jsx)(n.code,{children:'--chain-name "casper-net-1"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"secret key"})," of the account sending the ",(0,s.jsx)(n.code,{children:"Transaction"}),". For this example, we are using node-1 as the sender. The secret key file can be found at ",(0,s.jsx)(n.em,{children:"casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem"}),". In our example put-transaction, this will appear as ",(0,s.jsx)(n.code,{children:"--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem"}),". If your Transaction is more complex and requires multiple accounts, NCTL also establishes multiple users for testing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"pricing mode"})," for this transaction. In this case, we are using the ",(0,s.jsx)(n.code,{children:"fixed"})," pricing mode."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"gas price tolerance"})," in CSPR, which is the maximum amount of gas you are willing to pay for execution. This will appear in our example put-transaction as ",(0,s.jsx)(n.code,{children:"--gas-price-tolerance 10"}),". ",(0,s.jsxs)(n.strong,{children:["NCTL tests are not an accurate representation of potential gas costs on a live network. Please see our ",(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/cli/sending-transactions#a-note-about-gas-price",children:"note about gas prices"}),"."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"path"})," to your ",(0,s.jsx)(n.code,{children:"Transaction"})," that you wish to send to the NCTL network. This will appear in our example put-transaction as ",(0,s.jsx)(n.code,{children:"--transaction-path <PATH>"})," and will require you to define the path to your specific ",(0,s.jsx)(n.code,{children:"Transaction"})," Wasm."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"category"})," of the transaction, based on the size of the Wasm included. ",(0,s.jsx)(n.code,{children:"install-upgrade"})," being the largest, descending in size through ",(0,s.jsx)(n.code,{children:"large"}),", ",(0,s.jsx)(n.code,{children:"medium"}),", and ",(0,s.jsx)(n.code,{children:"small"}),". This will appear in our example put-transaction as ",(0,s.jsx)(n.code,{children:"--category 'install-upgrade'"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"session entry point"}),", which at installation time is usually ",(0,s.jsx)(n.code,{children:"call"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"})," for a node on your NCTL network. In this example, we are using the node at ",(0,s.jsx)(n.code,{children:"http://localhost:11101"}),". On the Casper Mainnet or Testnet, nodes will use port ",(0,s.jsx)(n.code,{children:"7777"}),". This will appear in our example put-transaction as ",(0,s.jsx)(n.code,{children:"--node-address http://<HOST>:7777"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The command to send your ",(0,s.jsx)(n.code,{children:"Transaction"})," should look similar to the following code snippet:"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Use of the ",(0,s.jsx)(n.code,{children:"$(get_path_to_client)"})," command assumes that you are operating in an activated NCTL environment."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$(get_path_to_client) put-transaction session \\\n--chain-name \"casper-net-1\" \\\n--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \\\n--gas-price-tolerance 10 \\\n--pricing-mode fixed \\\n--transaction-path <PATH> \\\n--category 'install-upgrade' \\\n--session-entry-point call \\\n--node-address http://localhost:11101\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The response will return something similar to the following information. Note the ",(0,s.jsx)(n.code,{children:"transaction_hash"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1294011212530641270,\n  "result": {\n    "api_version": "2.0.0",\n    "transaction_hash": {\n      "Version1": "efad4a969064b5f8189ea4d6dd2fba2926d01d583a35178c07d7b827de16789e"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"verifying-transaction-execution",children:"Verifying Transaction Execution"}),"\n",(0,s.jsxs)(n.p,{children:["The previous command sent the ",(0,s.jsx)(n.code,{children:"Transaction"})," to the NCTL network, but we recommend verifying deploy execution before continuing. The ",(0,s.jsx)(n.code,{children:"transaction_hash"})," received in the response allows you to query the ",(0,s.jsx)(n.code,{children:"Transaction"}),"'s status."]}),"\n",(0,s.jsxs)(n.p,{children:["To query the ",(0,s.jsx)(n.code,{children:"Transaction"}),"'s status, you will pass both the ",(0,s.jsx)(n.code,{children:"transaction_hash"})," and the same ",(0,s.jsx)(n.code,{children:"node-address"})," from above using the following command. This will return either an error message in the event of failure or the ",(0,s.jsx)(n.code,{children:"Transaction"})," details if it succeeds."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$(get_path_to_client) get-transaction efad4a969064b5f8189ea4d6dd2fba2926d01d583a35178c07d7b827de16789e -n http://localhost:11101\n"})}),"\n",(0,s.jsx)(n.h2,{id:"interacting-with-the-installed-contract",children:"Interacting with the Installed Contract"}),"\n",(0,s.jsxs)(n.p,{children:["Once your NCTL network executes your ",(0,s.jsx)(n.code,{children:"Transaction"}),", you can test the functionality of the installed contract. To do so, you will first need to identify any arguments to pass to the contract, starting with the ",(0,s.jsx)(n.code,{children:"PackageHash"})," itself. This hash identifies the contract package and allows you to target the included entry points. As we used the pre-established node-1 account to ",(0,s.jsxs)(n.a,{href:"/docs-redux/next/developers/cli/sending-transactions",children:["send the ",(0,s.jsx)(n.code,{children:"Transaction"})]}),", we can retrieve the ",(0,s.jsx)(n.code,{children:"PackageHash"})," from the node-1 account information. To do so, we will use the following NCTL command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nctl-view-faucet-account\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will return the NCTL faucet account's ",(0,s.jsx)(n.code,{children:"PublicKey"})," and ",(0,s.jsx)(n.code,{children:"AccountHash"}),". We can then query the ",(0,s.jsx)(n.code,{children:"PublicKey"})," using the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$(get_path_to_client) query-global-state \\\n--node-address http://localhost:11101 \\\n--key <PUBLIC KEY> \\\n--state-root-hash <STATE ROOT HASH>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can retrieve the current state root hash using the command ",(0,s.jsx)(n.code,{children:"casper client get-state-root-hash"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["This command will return an ",(0,s.jsx)(n.code,{children:"entity-account-"})," value that you can use as an entity identifier in the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$(get_path_to_client) get-entity \\\n--node-address http://localhost:11101 \\\n--entity-identifier <ENTITY IDENTIFIER>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command will return information pertaining to the account, including the ",(0,s.jsx)(n.code,{children:"NamedKeys"}),". The ",(0,s.jsx)(n.code,{children:"PackageHash"})," of the contract to be tested will appear here. The process of calling the contract is similar to that of installing it, as they are both accomplished through sending a ",(0,s.jsx)(n.code,{children:"Transaction"}),". In this instance, you will need the following information:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"node address"}),", entered in this instance using ",(0,s.jsx)(n.code,{children:"--node-address http://localhost:11101"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"chain name"}),", entered in this instance using ",(0,s.jsx)(n.code,{children:'--chain-name "casper-net-1"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"package hash"}),", entered in this instance using ",(0,s.jsx)(n.code,{children:"--package-address package-47b8b489d54c378144bf85429f4b29c8b47142d542272086f378b9d4e29cada4"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"gas price tolerance"})," in CSPR, which is the maximum amount of gas you are willing to pay for execution."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"entry point"})," on the contract that you wish to invoke."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Any ",(0,s.jsx)(n.strong,{children:"session arguments"})," specific to the contract that you are testing. Multiple instances of ",(0,s.jsx)(n.code,{children:"--session-arg"})," may be used as necessary to provide values to the contract. In the example below, you will see a demonstration of a session arg of ",(0,s.jsx)(n.code,{children:"amount"})," as ",(0,s.jsx)(n.code,{children:"--session-arg \"amount:u256='100'\""}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$(get_path_to_client) put-transaction package \\\n--node-address http://localhost:11101 \\\n--chain-name "casper-net-1" \\\n--package-address package-47b8b489d54c378144bf85429f4b29c8b47142d542272086f378b9d4e29cada4 \\ \n--gas-price-tolerance 10 \\\n--pricing-mode fixed \\\n--session-arg "amount:u256=\'100\'"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"verifying-correct-contract-behavior",children:"Verifying Correct Contract Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["After calling your installed contract, you can verify that the contract behaved as expected by observing the associated change in ",(0,s.jsx)(n.a,{href:"/docs-redux/next/developers/cli/installing-contracts#querying-global-state",children:"global state"}),". Depending on how your contract functions, this can have different meanings and results. If we use our counter contract from the ",(0,s.jsx)(n.a,{href:"/docs-redux/next/resources/beginner/counter/walkthrough",children:"basic counter contract tutorial"}),", the NCTL process would have the following flow:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Send a ",(0,s.jsx)(n.code,{children:"Transaction"}),' to install the "Counter" smart contract.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Verify the execution of the ",(0,s.jsx)(n.code,{children:"Transaction"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Interact with the installed contract package using an additional ",(0,s.jsx)(n.code,{children:"Transaction"})," that calls one or several of the entry points. For example, calling the ",(0,s.jsx)(n.code,{children:"increment"})," entry point to increase the counter by one."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify the associated change in global state. Namely, an increase in the counter."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);