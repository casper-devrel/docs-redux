"use strict";(self.webpackChunkcspr_docs=self.webpackChunkcspr_docs||[]).push([[1961],{45539:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(74848),i=n(28453);const a={title:"Sidecar Setup"},t="The Casper Sidecar",c={id:"operators/setup/casper-sidecar",title:"Sidecar Setup",description:"The Casper Sidecar is an application running alongside the node process. It allows subscribers to monitor a node's event stream, query stored events, and query the node's JSON-RPC API, thus receiving faster responses and reducing the load placed on the node. The Sidecar usually runs on the same machine as the node process, but it can be configured to run remotely if necessary. The Sidecar supports the following functionalities:",source:"@site/docs/operators/setup/casper-sidecar.md",sourceDirName:"operators/setup",slug:"/operators/setup/casper-sidecar",permalink:"/docs-redux/next/operators/setup/casper-sidecar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sidecar Setup"},sidebar:"operators",previous:{title:"Node Events",permalink:"/docs-redux/next/operators/setup/node-events"},next:{title:"Becoming a Validator",permalink:"/docs-redux/next/operators/becoming-a-validator/"}},d={},o=[{value:"Configuring the Sidecar Service",id:"configuring-the-sidecar",level:2},{value:"Installing the Sidecar",id:"installing-the-sidecar",level:2},{value:"Monitoring the Installation",id:"monitoring-the-sidecar",level:3},{value:"The Admin Server",id:"the-admin-server",level:2},{value:"Swagger Documentation",id:"swagger-documentation",level:2},{value:"OpenAPI Specification",id:"openapi-specification",level:2},{value:"Using the Sidecar",id:"using-the-sidecar",level:2},{value:"Troubleshooting Tips",id:"troubleshooting-tips",level:2}];function l(e){const s={a:"a",b:"b",br:"br",code:"code",details:"details",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"the-casper-sidecar",children:"The Casper Sidecar"})}),"\n",(0,r.jsx)(s.p,{children:"The Casper Sidecar is an application running alongside the node process. It allows subscribers to monitor a node's event stream, query stored events, and query the node's JSON-RPC API, thus receiving faster responses and reducing the load placed on the node. The Sidecar usually runs on the same machine as the node process, but it can be configured to run remotely if necessary. The Sidecar supports the following functionalities:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-sse-server",children:"server-sent events (SSE) endpoint"})," with an ",(0,r.jsx)(s.code,{children:"/events"})," endpoint streaming events from all the connected nodes. The Sidecar also stores these events."]}),"\n",(0,r.jsxs)(s.li,{children:["A ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rest-api-server",children:"REST API server"})," that allows clients to query stored events."]}),"\n",(0,r.jsxs)(s.li,{children:["A ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rpc-api-server",children:"JSON-RPC API"})," to interact with a Casper node."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/LEGACY_SSE_EMULATION.md",children:"Legacy emulation"})," for clients using older versions of the SSE API."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Visit GitHub for the latest source code and information on ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#system-components--architecture",children:"system architecture"}),", ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#configuring-the-sidecar",children:"configurations"}),", ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#running-and-testing-the-sidecar",children:"testing"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips",children:"troubleshooting"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Sidecar components and architecture diagram",src:n(6874).A+"",width:"1416",height:"978"})}),"\n",(0,r.jsx)(s.h2,{id:"configuring-the-sidecar",children:"Configuring the Sidecar Service"}),"\n",(0,r.jsxs)(s.p,{children:["Operators need to update the Sidecar configuration file according to their needs. Detailed configuration instructions are available in ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/resources/ETC_README.md",children:"GitHub"}),". Further details regarding each ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#configuring-the-sidecar",children:"configuration option"})," are available in GitHub."]}),"\n",(0,r.jsx)(s.h2,{id:"installing-the-sidecar",children:"Installing the Sidecar"}),"\n",(0,r.jsx)(s.p,{children:"The following command will install the Debian package for the Casper Sidecar service on various Linux flavors."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo apt install ./casper-sidecar_0.1.0-0_amd64.deb\n"})}),"\n",(0,r.jsxs)(s.details,{children:["\n",(0,r.jsx)(s.summary,{children:(0,r.jsx)(s.b,{children:"Sample output"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"Reading package lists... Done\nBuilding dependency tree       \nReading state information... Done\nNote, selecting 'casper-sidecar' instead of './casper-sidecar_0.1.0-0_amd64.deb'\nThe following NEW packages will be installed:\n  casper-sidecar\n0 upgraded, 1 newly installed, 0 to remove and 18 not upgraded.\nNeed to get 0 B/4162 kB of archives.\nAfter this operation, 20.2 MB of additional disk space will be used.\nGet:1 /home/ubuntu/casper-sidecar_0.1.0-0_amd64.deb casper-sidecar amd64 0.1.0-0 [4162 kB]\nSelecting previously unselected package casper-sidecar.\n(Reading database ... 102241 files and directories currently installed.)\nPreparing to unpack .../casper-sidecar_0.1.0-0_amd64.deb ...\nUnpacking casper-sidecar (0.1.0-0) ...\nSetting up casper-sidecar (0.1.0-0) ...\nAdding system user `csidecar' (UID 114) ...\nAdding new group `csidecar' (GID 120) ...\nAdding new user `csidecar' (UID 114) with group `csidecar' ...\nNot creating home directory `/home/csidecar'.\nCreated symlink /etc/systemd/system/multi-user.target.wants/casper-sidecar.service \u2192 /lib/systemd/system/casper-sidecar.service.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.br,{}),(0,r.jsx)(s.br,{})]}),"\n",(0,r.jsx)(s.h3,{id:"monitoring-the-sidecar",children:"Monitoring the Installation"}),"\n",(0,r.jsx)(s.p,{children:"Check the service status:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"systemctl status casper-sidecar\n"})}),"\n",(0,r.jsxs)(s.details,{children:["\n",(0,r.jsx)(s.summary,{children:(0,r.jsx)(s.b,{children:"Sample output"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"casper-sidecar.service - Casper Event Sidecar\n     Loaded: loaded (/lib/systemd/system/casper-sidecar.service; enabled; vendor preset: enabled)\n     Active: active (running) since Wed 2022-12-07 20:33:29 UTC; 1min 3s ago\n       Docs: https://docs.casperlabs.io\n   Main PID: 16707 (casper-si)\n      Tasks: 5 (limit: 9401)\n     Memory: 7.1M\n     CGroup: /system.slice/casper-sidecar.service\n             \u2514\u250016707 /usr/bin/casper-sidecar /etc/casper-sidecar/config.toml\n\nDec 07 20:33:29 user systemd[1]: Started Casper Event Sidecar.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.br,{}),(0,r.jsx)(s.br,{})]}),"\n",(0,r.jsx)(s.p,{children:"Check the logs and make sure the service is running as expected."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"journalctl --no-pager -u casper-sidecar\n"})}),"\n",(0,r.jsxs)(s.details,{children:["\n",(0,r.jsx)(s.summary,{children:(0,r.jsx)(s.b,{children:"Sample output"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"Dec 05 17:24:53 user systemd[1]: Started Casper Event Sidecar.\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.br,{}),(0,r.jsx)(s.br,{})]}),"\n",(0,r.jsxs)(s.p,{children:["If you see any errors, you may need to ",(0,r.jsx)(s.a,{href:"#configuring-the-service",children:"update the configuration"})," and restart the service with the commands below."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Stopping the service:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl stop casper-sidecar.service\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Starting the service:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl start casper-sidecar.service\n"})}),"\n",(0,r.jsx)(s.h2,{id:"the-admin-server",children:"The Admin Server"}),"\n",(0,r.jsxs)(s.p,{children:["If enabled, the Sidecar's administrative API can be accessed using the following command. The ",(0,r.jsx)(s.code,{children:"PORT"})," is usually ",(0,r.jsx)(s.code,{children:"18887"}),", depending on how the Sidecar was configured."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"http://localhost:PORT/metrics/\n"})}),"\n",(0,r.jsx)(s.h2,{id:"swagger-documentation",children:"Swagger Documentation"}),"\n",(0,r.jsxs)(s.p,{children:["You can access the Swagger documentation at ",(0,r.jsx)(s.code,{children:"http://localhost:PORT/swagger-ui/"}),". The ",(0,r.jsx)(s.code,{children:"PORT"})," is usually ",(0,r.jsx)(s.code,{children:"18888"}),", depending on how the Sidecar was configured."]}),"\n",(0,r.jsx)(s.h2,{id:"openapi-specification",children:"OpenAPI Specification"}),"\n",(0,r.jsxs)(s.p,{children:["An OpenAPI schema is available at ",(0,r.jsx)(s.code,{children:"http://localhost:PORT/api-doc.json/"}),". The ",(0,r.jsx)(s.code,{children:"PORT"})," is usually ",(0,r.jsx)(s.code,{children:"18888"}),", depending on how the Sidecar was configured."]}),"\n",(0,r.jsx)(s.h2,{id:"using-the-sidecar",children:"Using the Sidecar"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/USAGE.md",children:"Casper Sidecar Usage Guide"})," describes how to consume events and perform queries using the Sidecar, covering the following topics:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Node-generated events emitted by the node(s) to which the Sidecar connects"}),"\n",(0,r.jsx)(s.li,{children:"Sidecar-generated events originating solely from the Sidecar service and not from a node"}),"\n",(0,r.jsx)(s.li,{children:"The RESTful endpoint for performing useful queries about the state of the network"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"troubleshooting-tips",children:"Troubleshooting Tips"}),"\n",(0,r.jsxs)(s.p,{children:["For troubleshooting tips, visit ",(0,r.jsx)(s.a,{href:"https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips",children:"Github"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},6874:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/sidecar-diagram-92779ddba3ccba102b935c8144e6e6a8.png"},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var r=n(96540);const i={},a=r.createContext(i);function t(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);