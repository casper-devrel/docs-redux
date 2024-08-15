"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[4803],{4147:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=n(4848),a=n(8453);const i={},o="Signing Deploys",r={id:"developers/dapps/signing-a-deploy",title:"Signing Deploys",description:"When creating a Deploy to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the deploy using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the Deploy allow the network to verify that it should be executed.",source:"@site/docs/developers/dapps/signing-a-deploy.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/signing-a-deploy",permalink:"/docs-redux/developers/dapps/signing-a-deploy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"URef Access Rights",permalink:"/docs-redux/developers/dapps/uref-security"},next:{title:"Estimating Gas Costs with Speculative Execution",permalink:"/docs-redux/developers/dapps/speculative-exec"}},d={},c=[{value:"Public Key Cryptography",id:"public-key-cryptography",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"signing-deploys",children:"Signing Deploys"})}),"\n",(0,t.jsxs)(s.p,{children:["When creating a ",(0,t.jsx)(s.a,{href:"/docs-redux/concepts/serialization-standard#serialization-standard-deploy",children:(0,t.jsx)(s.code,{children:"Deploy"})})," to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the deploy using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the Deploy allow the network to verify that it should be executed."]}),"\n",(0,t.jsxs)(s.p,{children:["When a signature is attached to a deploy, it is paired with the public key of the signer, and referred to as an ",(0,t.jsx)(s.a,{href:"/docs-redux/concepts/serialization-standard#approval",children:(0,t.jsx)(s.code,{children:"Approval"})}),".  Every valid deploy has at least one approval."]}),"\n",(0,t.jsxs)(s.p,{children:["The signature creation process begins with the hashing of the payment and session of the deploy to create the ",(0,t.jsx)(s.code,{children:"BodyHash"}),". The ",(0,t.jsx)(s.code,{children:"BodyHash"})," becomes a component of the ",(0,t.jsx)(s.a,{href:"/docs-redux/concepts/serialization-standard#deploy-header",children:(0,t.jsx)(s.code,{children:"DeployHeader"})})," as outlined in the serialization standard. From there, the ",(0,t.jsx)(s.code,{children:"DeployHeader"})," can be hashed to create the ",(0,t.jsx)(s.a,{href:"/docs-redux/concepts/serialization-standard#deploy-hash",children:(0,t.jsx)(s.code,{children:"DeployHash"})}),". As outlined above, the ",(0,t.jsx)(s.code,{children:"DeployHash"})," is then combined with the account's key-pair to create the deploy's signature."]}),"\n",(0,t.jsxs)(s.p,{children:["As the ",(0,t.jsx)(s.code,{children:"DeployHash"})," contains a hash of the deploy's body within, any variation to any aspect of the deploy or sending account's keys would render the ",(0,t.jsx)(s.code,{children:"DeployHash"})," invalid."]}),"\n",(0,t.jsx)(s.h2,{id:"public-key-cryptography",children:"Public Key Cryptography"}),"\n",(0,t.jsxs)(s.p,{children:["Casper networks are compatible with both ",(0,t.jsx)(s.code,{children:"Ed25519"})," and ",(0,t.jsx)(s.code,{children:"Secp256k1"})," public key cryptography. When ",(0,t.jsx)(s.a,{href:"/docs-redux/concepts/serialization-standard",children:"serialized"}),", public keys and signatures are prefixed with a single byte, used as a tag to denote the applicable algorithm. Ed25519 public keys and signatures are prefixed with ",(0,t.jsx)(s.code,{children:"1"}),", whereas Secp256k1 are prefixed with ",(0,t.jsx)(s.code,{children:"2"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Casper uses ",(0,t.jsx)(s.code,{children:"blake2b"})," hashing within our ",(0,t.jsx)(s.a,{href:"/docs-redux/concepts/serialization-standard",children:"serialization"}),". However, these hashed values will be hashed once again when they are signed over. The type of hashing depends on the associated keypair algorithm as follows:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Ed25519 signs over a SHA-512 digest."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Secp256k1 signs over a SHA-256 digest."}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var t=n(6540);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);