"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[414],{7553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(4848),s=t(8453);const r={},i="Required Methods for Minimal Compliance",a={id:"developers/json-rpc/minimal-compliance",title:"Required Methods for Minimal Compliance",description:"The methods included in this document represent the most basic, fundamental endpoints for a viable and compliant Casper SDK. They allow the user to retrieve the information necessary to interact with a Casper network, as well as the means to interact.",source:"@site/docs/developers/json-rpc/minimal-compliance.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/minimal-compliance",permalink:"/developers/json-rpc/minimal-compliance",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Guidance for JSON-RPC SDK Compliance",permalink:"/developers/json-rpc/guidance"},next:{title:"Transactional JSON-RPC Methods",permalink:"/developers/json-rpc/json-rpc-transactional"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"required-methods-for-minimal-compliance",children:"Required Methods for Minimal Compliance"}),"\n",(0,o.jsx)(n.p,{children:"The methods included in this document represent the most basic, fundamental endpoints for a viable and compliant Casper SDK. They allow the user to retrieve the information necessary to interact with a Casper network, as well as the means to interact."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-informational#chain-get-block",children:(0,o.jsx)(n.code,{children:"chain_get_block"})})," - This method returns the JSON representation of a Block from the network. The ongoing validity of the chain depends on block verification, which includes both a record of deploys and transfers."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-informational#info-get-deploy",children:(0,o.jsx)(n.code,{children:"info_get_deploy"})})," - This method allows retrieval of a Deploy from a Casper network. Without this method, users will be unable to verify any subsequent information relating to a sent Deploy."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-transactional#account-put-deploy",children:(0,o.jsx)(n.code,{children:"account_put_deploy"})})," - This method allows users to send their compiled Wasm (as part of a Deploy) to a node on a Casper network. Deploys represent the only means by which a user can perform computation on the platform, without which their interaction with a Casper network will be entirely passive."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-informational#chain-get-state-root-hash",children:(0,o.jsx)(n.code,{children:"chain_get_state_root_hash"})})," - The state root hash is one of the several ",(0,o.jsx)(n.a,{href:"/developers/json-rpc/types_chain#globalstateidentifier",children:"global state identifiers"})," used to query the network state after sending deploys."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-informational#state-get-account-info",children:(0,o.jsx)(n.code,{children:"state_get_account_info"})})," - This method returns a JSON representation of an Account from the network. ",(0,o.jsx)(n.code,{children:"state_get_account_info"})," is required to view associated account information, including any associated keys, named keys, action thresholds and the main purse."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-informational#query-balance",children:(0,o.jsx)(n.code,{children:"query_balance"})})," - This method returns a purse's balance from a network. This is the only method to return a purse's balance in a human-readable format."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-informational#state-get-dictionary-item",children:(0,o.jsx)(n.code,{children:"state_get_dictionary_item"})})," - This method returns an item from a Dictionary. Dictionaries represent a more efficient means of tracking large amounts of state."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/developers/json-rpc/json-rpc-informational#query-global-state",children:(0,o.jsx)(n.code,{children:"query_global_state"})})," - This method allows for querying values stored under certain keys in global state. Aside from purse balances, this is the main means of recovering stored data from a Casper network."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The deprecated method ",(0,o.jsx)(n.code,{children:"state_get_balance"})," should not be used."]})}),"\n",(0,o.jsxs)(n.p,{children:["In addition to these methods, a minimally compliant Casper SDK must account for the ",(0,o.jsx)(n.a,{href:"/developers/json-rpc/types_chain",children:"types"})," associated with each method. Each method above links to the expanded information available within the larger JSON RPC method pages, which includes the necessary associated types."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);