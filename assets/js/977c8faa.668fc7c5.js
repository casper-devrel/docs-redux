"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[6221],{63116:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=s(74848),t=s(28453);const o={},d="Network Communication {#communications-head}",a={id:"concepts/design/p2p",title:"Network Communication",description:"communications-head}",source:"@site/docs/concepts/design/p2p.md",sourceDirName:"concepts/design",slug:"/concepts/design/p2p",permalink:"/docs-redux/next/concepts/design/p2p",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Mel Padden",lastUpdatedAt:1723745091e3,frontMatter:{},sidebar:"concepts",previous:{title:"Network Design",permalink:"/docs-redux/next/concepts/design/casper-design"},next:{title:"Consensus in a Casper Network",permalink:"/docs-redux/next/concepts/design/consensus"}},c={},r=[{value:"Identity",id:"identity",level:2},{value:"Inter-node connections",id:"inter-node-connections",level:2},{value:"Network",id:"network",level:2},{value:"Gossiping",id:"communications-gossiping",level:2},{value:"Requesting missing data",id:"requesting-missing-data",level:2},{value:"Validation",id:"validation",level:3},{value:"Node Discovery",id:"node-discovery",level:2}];function l(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"communications-head",children:"Network Communication"})}),"\n",(0,i.jsx)(n.h2,{id:"identity",children:"Identity"}),"\n",(0,i.jsx)(n.p,{children:"Each node has an identity on the network (which is not the same as its identity in the consensus process). The network identity (ID) is based on the fingerprint of the public key of a TLS certificate. A node generates a new private key each time it starts, ensuring a unique ID."}),"\n",(0,i.jsx)(n.p,{children:"Each identity is linked with an address, which is an IP and port pair where the node is reachable. This address is also called an endpoint."}),"\n",(0,i.jsx)(n.h2,{id:"inter-node-connections",children:"Inter-node connections"}),"\n",(0,i.jsxs)(n.p,{children:["Should a node want to connect to another node with a known endpoint, it opens a TLS connection to the endpoint's address. In the context of common TLS terminology, this makes the connecting node the ",(0,i.jsx)(n.em,{children:"client"})," and the remote node the ",(0,i.jsx)(n.em,{children:"server"})," for this connection."]}),"\n",(0,i.jsx)(n.p,{children:"During connection setup, the client checks the server's certificate, matching the endpoint's expected public identity to ensure we have connected to the right node. Additionally, the TLS parameters of the connection and certificate are required to contain the same ciphers, digests, etc., to protect against downgrade attacks."}),"\n",(0,i.jsx)(n.p,{children:"Simultaneously, the connecting node sends its certificate as the client certificate, allowing the server to perform the same check-in reverse and establish the client's ID. At the end of the process, both nodes can be sure to which peer they are connected."}),"\n",(0,i.jsxs)(n.p,{children:["Once a connection is established, the server will immediately seek to connect back to the client based on its endpoint (see ",(0,i.jsx)(n.a,{href:"#node-discovery",children:"Node Discovery"})," on how the server finds endpoints)."]}),"\n",(0,i.jsx)(n.p,{children:"Connections are used for sending messages one-way only; only the node initiating a connection will send messages on it."}),"\n",(0,i.jsx)(n.h2,{id:"network",children:"Network"}),"\n",(0,i.jsxs)(n.p,{children:["As soon as a node has connected to one node in the network, it partakes in ",(0,i.jsx)(n.a,{href:"#node-discovery",children:"Node Discovery"}),". In general, any node will attempt to connect to any other node on the network it finds as described above, leading to a fully connected network."]}),"\n",(0,i.jsx)(n.p,{children:"Two classes of data transfers happen in the network; broadcasts and gossiping. A broadcast message is sent once, without guarantees, to all the nodes connected to it. The process of gossiping is described further below."}),"\n",(0,i.jsx)(n.p,{children:"In general, only consensus messages, which are only sent by active validators, are broadcast. Everything else is gossipped."}),"\n",(0,i.jsx)(n.h2,{id:"communications-gossiping",children:"Gossiping"}),"\n",(0,i.jsxs)(n.p,{children:["Multiple types of objects are gossipped, the most prominent ones being blocks, transactions, and endpoints (see ",(0,i.jsx)(n.a,{href:"#identity",children:"Identity"}),"). Each of these objects is immutable and can be identified by a unique hash."]}),"\n",(0,i.jsx)(n.p,{children:"Gossiping is a process of distributing a value across the entire network without directly sending it to each node. This process allows only a subset of nodes to be connected to the original sender and spreading the bandwidth and processing requirements across the network at the cost of latency and overall bandwidth consumed."}),"\n",(0,i.jsx)(n.p,{children:"The process can be summarized as follows:"}),"\n",(0,i.jsxs)(n.p,{children:["Given a message ",(0,i.jsx)(n.em,{children:"M"})," to gossip, the desired saturation ",(0,i.jsx)(n.em,{children:"S"}),", and an infection limit ",(0,i.jsx)(n.em,{children:"L"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Pick a subset ",(0,i.jsx)(n.em,{children:"T"})," of ",(0,i.jsx)(n.em,{children:"K"})," nodes from all currently connected nodes."]}),"\n",(0,i.jsxs)(n.li,{children:["Send ",(0,i.jsx)(n.em,{children:"M"})," to each node in ",(0,i.jsx)(n.em,{children:"T"}),", noting which nodes were already infected (a node is considered infected if it already had received or known ",(0,i.jsx)(n.em,{children:"M"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["For every node shown as already infected, add another random node outside to ",(0,i.jsx)(n.em,{children:"T"})," and send it ",(0,i.jsx)(n.em,{children:"M"}),", again noting the response."]}),"\n",(0,i.jsxs)(n.li,{children:["End when we confirm infection of ",(0,i.jsx)(n.em,{children:"L"})," new nodes or encountered ",(0,i.jsx)(n.em,{children:"S"})," already infected nodes."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Through this process, a message will spread to almost all nodes over time."}),"\n",(0,i.jsx)(n.h2,{id:"requesting-missing-data",children:"Requesting missing data"}),"\n",(0,i.jsx)(n.p,{children:"While gossiping and broadcasting are sufficient to distribute data across the network in most cases, nodes can also request missing data from peers should they require it. A common example is a missing transaction from a block."}),"\n",(0,i.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)(n.p,{children:"Objects have a concept of dependencies. For example, a block depends on all the transactions whose hashes are listed inside it. A node considers any object valid if all of its dependencies are available on the local node."}),"\n",(0,i.jsx)(n.p,{children:"Should a node receive an object from a peer that is not valid yet, it will attempt to complete its validation before processing it further. In the case of gossiping, this means pausing the gossiping of the object until all its dependencies can be retrieved."}),"\n",(0,i.jsx)(n.p,{children:"Any node is responsible for only propagating valid objects. Should a node not retrieve all missing dependencies of an object from the peer that sent it, it may punish the peer for doing so."}),"\n",(0,i.jsx)(n.h2,{id:"node-discovery",children:"Node Discovery"}),"\n",(0,i.jsx)(n.p,{children:"Node discovery happens by each node periodically gossiping its public address. Upon receiving an address via gossip, each node immediately tries to establish a connection to it and notes the resulting endpoint, if successful."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var i=s(96540);const t={},o=i.createContext(t);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);