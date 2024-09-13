"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4008],{5385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=s(74848),l=s(28453);const c={},d="CLType {#cltype}",i={id:"developers/json-rpc/types_cl",title:"CLType",description:"cltype}",source:"@site/versioned_docs/version-1.5.X/developers/json-rpc/types_cl.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/types_cl",permalink:"/developers/json-rpc/types_cl",draft:!1,unlisted:!1,tags:[],version:"1.5.X",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1724759228e3,frontMatter:{},sidebar:"developers",previous:{title:"Types",permalink:"/developers/json-rpc/types_chain"},next:{title:"Overview of Casper dApps",permalink:"/developers/dapps/"}},t={},a=[{value:"CLValue",id:"clvalue",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cltype",children:"CLType"})}),"\n",(0,r.jsxs)(n.p,{children:["Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a ",(0,r.jsx)(n.a,{href:"#clvalue",children:(0,r.jsx)(n.code,{children:"CLValue"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    `Bool`\n    `I32`\n    `I64`\n    `U8`\n    `U32`\n    `U64`\n    `U128`\n    `U256`\n    `U512`\n    `Unit`\n    `String`\n    `Key`\n    `URef`\n    `PublicKey`\n    `Any`\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Option"})," Option of a ",(0,r.jsx)(n.code,{children:"CLType"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"List"})," Variable-length list of a single ",(0,r.jsx)(n.code,{children:"CLType"})," (comparable to a ",(0,r.jsx)(n.code,{children:"Vec"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ByteArray"})," Fixed-length list of a single ",(0,r.jsx)(n.code,{children:"CLType"})," (comparable to a Rust array)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Result"})," ",(0,r.jsx)(n.code,{children:"Result"})," with ",(0,r.jsx)(n.code,{children:"Ok"})," and ",(0,r.jsx)(n.code,{children:"Err"})," variants of ",(0,r.jsx)(n.code,{children:"CLType"}),"'s."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Map"})," Map with keys of a single ",(0,r.jsx)(n.code,{children:"CLType"})," and values of a single ",(0,r.jsx)(n.code,{children:"CLType"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Tuple1"})," 1-ary tuple of a ",(0,r.jsx)(n.code,{children:"CLType"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Tuple2"})," 2-ary tuple of ",(0,r.jsx)(n.code,{children:"CLType"}),"s."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Tuple3"})," 3-ary tuple of ",(0,r.jsx)(n.code,{children:"CLType"}),"s."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clvalue",children:"CLValue"}),"\n",(0,r.jsxs)(n.p,{children:["A Casper value, i.e. a value which can be stored and manipulated by smart contracts. It holds the underlying data as a type-erased, serialized ",(0,r.jsx)(n.code,{children:"Vec<u8>"})," and also holds the CLType of the underlying data as a separate member. The ",(0,r.jsx)(n.code,{children:"parsed"})," field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bytes"})," A Casper serialized representation of the underlying value. For more information, reference the ",(0,r.jsx)(n.a,{href:"/concepts/serialization-standard",children:"Serialization Standard"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"cl_type"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var r=s(96540);const l={},c=r.createContext(l);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);