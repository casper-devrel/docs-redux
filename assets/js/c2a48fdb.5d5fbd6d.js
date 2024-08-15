"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[6623],{919:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=s(4848),o=s(8453),r=s(6025);const a={title:"Fast Sync"},c="Introducing Fast Sync",i={id:"operators/setup/fast-sync",title:"Fast Sync",description:"A Casper Network requires new nodes to download and execute every block to join the network. From genesis (start of the Mainnet), the node executes each deploy in every block. This process continues until the node has arrived at the current state of the blockchain. Syncing a node this way can take a very long time.",source:"@site/docs/operators/setup/fast-sync.md",sourceDirName:"operators/setup",slug:"/operators/setup/fast-sync",permalink:"/docs-redux/operators/setup/fast-sync",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Fast Sync"},sidebar:"operators",previous:{title:"Installation",permalink:"/docs-redux/operators/setup/install-node"},next:{title:"Open Files Limit",permalink:"/docs-redux/operators/setup/open-files"}},l={},d=[{value:"How Fast Sync Works",id:"how-fast-sync-works",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introducing-fast-sync",children:"Introducing Fast Sync"})}),"\n","\n",(0,n.jsx)(t.p,{children:"A Casper Network requires new nodes to download and execute every block to join the network. From genesis (start of the Mainnet), the node executes each deploy in every block. This process continues until the node has arrived at the current state of the blockchain. Syncing a node this way can take a very long time."}),"\n",(0,n.jsxs)(t.p,{children:["We have introduced a fast syncing process (fast sync) to provide a faster alternative to joining a Casper network. Fast sync does not start syncing at the genesis block; instead, the operator verifies a recent block and provides a ",(0,n.jsx)(t.a,{href:"/docs-redux/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing",children:"trusted hash"})," to the node software. The global state, account balances, and all other on-chain information is the storage layer of the blockchain and is massive in size, so fast sync downloads the global state of only the most recent block. The following section briefly describes the fast sync process."]}),"\n",(0,n.jsx)(t.h2,{id:"how-fast-sync-works",children:"How Fast Sync Works"}),"\n",(0,n.jsx)("img",{src:(0,r.Ay)("/image/fast-sync-process.png"),class:"Fast-sync process",width:"500"}),"\n",(0,n.jsxs)(t.p,{children:["For fast sync, operators must provide the trusted hash of a block in the ",(0,n.jsx)(t.code,{children:"config.toml"})," file. An example can be found ",(0,n.jsx)(t.a,{href:"https://github.com/casper-network/casper-node/blob/f7d8228de3cb56a3fe705f5a787d3dbf03ff7998/resources/production/config-example.toml#L7",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Fast sync uses this trusted block as part of the cryptographic verification for the later blocks. The node downloads the trusted block first, then newer blocks up to and including the most recent block from the current era. For example, if the trusted hash is 5 hours old, it will first download that block, then newer blocks, until it arrives at one that is only a few minutes old. It then downloads the newer block's global state. Finally, it executes all the blocks the network created while the download was in progress until it is entirely in sync."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(6540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);