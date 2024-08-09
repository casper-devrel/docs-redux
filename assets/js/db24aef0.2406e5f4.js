"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[2799],{3764:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=s(4848),r=s(8453);const t={title:"Non-Root Users"},i="Setting up a Non-Root User",c={id:"operators/setup/non-root-user",title:"Non-Root Users",description:"Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace `` in the instructions below with your username.",source:"@site/docs/operators/setup/non-root-user.md",sourceDirName:"operators/setup",slug:"/operators/setup/non-root-user",permalink:"/operators/setup/non-root-user",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Non-Root Users"},sidebar:"operators",previous:{title:"Join a Network",permalink:"/operators/setup/joining"},next:{title:"Becoming a Validator",permalink:"/operators/becoming-a-validator/"}},a={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"setting-up-a-non-root-user",children:"Setting up a Non-Root User"}),"\n",(0,o.jsxs)(n.p,{children:["Operators may log into their servers remotely using a key. The following steps explain how to create a non-root user and log in using a private key instead of the root user. Replace ",(0,o.jsx)(n.code,{children:"<username>"})," in the instructions below with your username."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/keygen",children:"ssh-keygen"})," to generate a new SSH key."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create the user with no password, as the key is your password."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"sudo adduser <username> --disabled-password\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Create authorized_keys with your key to log in."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"sudo su - <username>\nmkdir .ssh\nchmod 700 .ssh\ntouch .ssh/authorized_keys\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Use the editor of your choice and paste your .ssh public key i the ",(0,o.jsx)(n.code,{children:".ssh/authorized_keys"})," file."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Exit out of the ",(0,o.jsx)(n.code,{children:"<username>"})," account and log into the root or previous sudo-er account."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"exit\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsx)(n.li,{children:"Add your user to sudo-ers under the root account or your previous sudo-er account."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"sudo visudo\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsxs)(n.li,{children:["Type ",(0,o.jsx)(n.code,{children:"<username>  ALL=(ALL:ALL) NOPASSWD:ALL"})," below the row containing ",(0,o.jsx)(n.code,{children:"root    ALL=(ALL:ALL) ALL"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# User privilege specification\nroot    ALL=(ALL:ALL) ALL\n<username>  ALL=(ALL:ALL) NOPASSWD:ALL\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"8",children:["\n",(0,o.jsx)(n.li,{children:"You should be able to log in with the key and not use the root user."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ssh -i <your ssh private key> <username>@<server ip>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here is an example command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ssh -i ~/.ssh/id_rsa casper@10.21.10.200\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var o=s(6540);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);